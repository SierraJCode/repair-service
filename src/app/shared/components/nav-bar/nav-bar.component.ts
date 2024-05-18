import { Component, } from '@angular/core';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  
}