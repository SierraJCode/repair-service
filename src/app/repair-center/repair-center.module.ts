import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FeaturedRepairComponent } from './pages/featured-repair/featured-repair.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    AboutPageComponent,
    FeaturedRepairComponent,
    FacilitiesComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicePageComponent,
    AboutPageComponent,
    FeaturedRepairComponent,
    FacilitiesComponent,
    TestimonialsComponent
  ]
})
export class RepairCenterModule { }
