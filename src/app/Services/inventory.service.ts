// # Inventory Service

import {Http, Headers, Response} from '@angular/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';

import {Inventory} from '../Stores/inventory.store';

import {SocketService} from './socket.service';

import * as io from 'socket.io-client';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class InventoryService {

  _inventories: BehaviorSubject<Array<Inventory>> = new BehaviorSubject<Array<Inventory>>([]);
  private dataStore: {
    inventories: Array<Inventory>
  };

  // Inject the `AppStore` into the constructor with a type of `AppStore`
  constructor(private http: Http, private socketService: SocketService) {
    this.dataStore = {
      inventories: []
    };
    this.loadAll();
    console.log('Loaded all inventories');
    // this.setSocketCalls();
  }

  get inventories(){
    return this._inventories.asObservable();
  }

  loadAll() {
    this.http.get('/api/inventory').map(response => response.json()).subscribe(data => {
      this.dataStore.inventories = data;
      this._inventories.next(Object.assign({}, this.dataStore).inventories);
    }, error => console.log('Could not load inventories.'));
  }

  setSocketCalls() {

      this.socketService.getSocket().on('new-inventory', (data) => {
        let notFound = true;

        this.dataStore.inventories.forEach((item, index) => {
          if (item._id === data._id) {
            this.dataStore.inventories[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          console.log('data not found');
          this.dataStore.inventories.push(data);
        }

        this._inventories.next(Object.assign({}, this.dataStore).inventories);
      });
    }

}