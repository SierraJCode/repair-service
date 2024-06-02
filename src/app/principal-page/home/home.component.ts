import { Component } from '@angular/core';

import { icon } from '../../icons';

@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  icon = icon;



  isMenuOpen: boolean = false;

  toggleMenu() : void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  facilities = [
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch Motronic M1.1 / M1.2 / M1.3' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch EDC15C6 Mercedes CR2.Xx' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch Motronic M1.1 / M1.2 / M1.3' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita Bosch EDC15C6 Mercedes CR2.Xx' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' },
    { img: 'assets/caja.jpg', title: 'Reparación Centralita ABS TRW EBC 450 ABS Ford' }
  ];

}
