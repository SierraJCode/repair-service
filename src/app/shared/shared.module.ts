import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent,
    ServicesComponent
  ]
})
export class SharedModule { }
