// # Medicine Service

import {Http, Headers, Response} from '@angular/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

import {Medicine} from '../Stores/medicine.store';

import {SocketService} from './socket.service';

import * as io from 'socket.io-client';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class MedicineService {

  _medicines: BehaviorSubject<Array<Medicine>> = new BehaviorSubject<Array<Medicine>>([]);
  private dataStore: {
    medicines: Array<Medicine>
  };

  // Inject the `AppStore` into the constructor with a type of `AppStore`
  constructor(private http: Http, private socketService: SocketService) {
    this.dataStore = {
      medicines: []
    };
    this.loadAll();
    console.log('Loaded all medicines');
    this.setSocketCalls();
  }

  getMedicine(medicineId: string): Medicine{
    console.log('Finding medicine for id ' + medicineId + ' in service');
    console.log(this.dataStore.medicines);
    var foundMedicine;
    this.dataStore.medicines.forEach((item, index) => {
      console.log(item._id);
      if (item._id.toString() === medicineId) {
        console.log('found medicine');
        console.log(this.dataStore.medicines[index]);        
        foundMedicine = this.dataStore.medicines[index];
      }
    });
    return foundMedicine;
  }

  get medicines(){
    return this._medicines.asObservable();
  }

  loadAll() {
    this.http.get('/api/medicine').map(response => response.json()).subscribe(data => {
      this.dataStore.medicines = data;
      this._medicines.next(Object.assign({}, this.dataStore).medicines);
    }, error => console.log('Could not load medicines.'));
  }

  setSocketCalls() {

      this.socketService.getSocket().on('new-medicine', (data) => {
        let notFound = true;

        this.dataStore.medicines.forEach((item, index) => {
          if (item._id === data._id) {
            this.dataStore.medicines[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          console.log('data not found');
          this.dataStore.medicines.push(data);
        }

        this._medicines.next(Object.assign({}, this.dataStore).medicines);
      });
    }

}