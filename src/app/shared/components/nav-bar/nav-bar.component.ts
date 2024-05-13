import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {


  
  showMenu(){
  const navLinks = document.getElementById("navLinks");

  if (navLinks){
    navLinks.style.right = "0";
  }
  
  }
  
  hideMenu(){
    const navLinks = document.getElementById("navLinks");

    if (navLinks){
      navLinks.style.right = "-200px"
    }

  }
}
