import { Component } from '@angular/core';

import { faBars, faTimes, faEnvelope, faPhone, faStar, faMoneyCheckDollar, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faBars = faBars;
  faTimes = faTimes;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faStar = faStar;
  faMoney = faMoneyCheckDollar;
  faCalendar = faCalendar;
  faTime = faClock;



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
