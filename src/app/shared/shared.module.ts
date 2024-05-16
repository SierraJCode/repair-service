import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextBoxComponent } from './components/text-box/text-box.component';



@NgModule({
  declarations: [
    // HomePageComponent,
    // AboutPageComponent,
    // ContactPageComponent,
    NavBarComponent,
    TextBoxComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent,
    TextBoxComponent,
    // AboutPageComponent,
  ]
})
export class SharedModule { }
