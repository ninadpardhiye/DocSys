import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';

import {Inventory} from '../Stores/inventory.store';
import {Medicine} from '../Stores/medicine.store';
import {InventoryService} from '../Services/inventory.service';
import {MedicineService} from '../Services/medicine.service';

@Component({
  selector: 'inventory',
  providers: [InventoryService, MedicineService],
  template: require('./inventory.html')
})

export class Inventories {

  public inventories: Observable<Inventory[]>;

  constructor(public medicineService: MedicineService, public inventoryService: InventoryService) {
    this.inventories = inventoryService.inventories;
  }

  getMedicine(medicineId: string){
      // let foundMedicine = new Medicine(); 
      let foundMedicine = this.medicineService.getMedicine(medicineId);
      // console.log(this.medicineService.getMedicine(medicineId));
      // console.log('in component');
      // console.log(foundMedicine);
      if(foundMedicine !== undefined){
          return foundMedicine;
      }
      else{
          return;
      } 
  }

}
