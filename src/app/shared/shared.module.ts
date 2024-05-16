import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    NavBarComponent,
    TextBoxComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
    
  ],
  exports: [
    NavBarComponent,
    TextBoxComponent,
  ]
})
export class SharedModule { }
