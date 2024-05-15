import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicePageComponent,
    AboutPageComponent
  ]
})
export class RepairCenterModule { }
