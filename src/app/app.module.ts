import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { RepairCenterModule } from './repair-center/repair-center.module';
import { PrincipalPageModule } from './principal-page/principal-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RepairCenterModule,
    PrincipalPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
