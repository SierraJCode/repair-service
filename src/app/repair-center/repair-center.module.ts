import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FeaturedRepairComponent } from './pages/featured-repair/featured-repair.component';



@NgModule({
  declarations: [
    ServicePageComponent,
    AboutPageComponent,
    FeaturedRepairComponent
  ],
  imports: [
    // CommonModule
  ],
  exports: [
    ServicePageComponent,
    AboutPageComponent,
    FeaturedRepairComponent
  ]
})
export class RepairCenterModule { }
