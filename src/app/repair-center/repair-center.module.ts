import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ServicePageComponent } from './pages/service-page/service-page.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    FacilitiesComponent,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicePageComponent,
    FacilitiesComponent,
    TestimonialsComponent,
  ]
})

export class RepairCenterModule { }
