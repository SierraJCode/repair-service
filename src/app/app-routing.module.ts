import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'repair-center', loadChildren: () => import('./repair-center/repair-center.module').then(m => m.RepairCenterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
