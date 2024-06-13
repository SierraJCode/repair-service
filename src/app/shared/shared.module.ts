import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    InfoComponent,
    TestimonialsComponent
  ]
})
export class SharedModule { }
