import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './principal-page/home/home.component';
import { AboutComponent } from './principal-page/about/about.component';
import { ContactComponent } from './principal-page/contact/contact.component';
import { NotFoundComponent } from './principal-page/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent}



  // { path: 'repair-center', loadChildren: () => import('./repair-center/repair-center.module').then(m => m.RepairCenterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
