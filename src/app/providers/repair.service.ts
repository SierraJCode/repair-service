import { Injectable } from '@angular/core';
import { Facility } from '../interface/Facility';

@Injectable({
  providedIn: 'root'
})
export class RepairService {

  private facilities: Facility[] = [
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch Motronic M1.1 / M1.2 / M1.3' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch EDC15C6 Mercedes CR2.Xx' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch Motronic M1.1 / M1.2 / M1.3' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch EDC15C6 Mercedes CR2.Xx' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' }
  ];

  getFacilities(){
    return this.facilities;
  }

  getFacility(id: number) {
    return this.facilities[id];
  }

  constructor() { }
}
