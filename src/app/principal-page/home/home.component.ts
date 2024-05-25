import { Component } from '@angular/core';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'principal-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
