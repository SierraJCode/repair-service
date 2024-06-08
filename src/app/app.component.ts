import { icon } from './icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  icon = icon;

  isMenuOpen: boolean = false;

  toggleMenu() : void{
    this.isMenuOpen = !this.isMenuOpen;
  }
}
