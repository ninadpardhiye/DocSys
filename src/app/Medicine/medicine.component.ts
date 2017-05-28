import {Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore} from '../app.store';

import {Medicine} from '../Stores/medicine.store';
import {MedicineService} from '../Services/medicine.service';

@Component({
  selector: 'medicine',
  providers: [MedicineService],
  template: require('./medicine.html')
})

export class Medicines {

  public medicines: Observable<Medicine[]>;

  constructor(public medicineService: MedicineService) {
    this.medicines = medicineService.medicines;
  }

}
