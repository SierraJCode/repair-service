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


  
  showMenu():void{
  const navLinks = document.getElementById("navLinks");

  if (navLinks){
    navLinks.style.right = "0";
  }
  
  }
  
  hideMenu():void{
    const navLinks = document.getElementById("navLinks");

    if (navLinks){
      navLinks.style.right = "-200px"
    }

  }
}
