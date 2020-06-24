import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
import { AskingnameComponent } from './askingname/askingname.component';


const routes: Routes = [
  { path: 'first', component: FirstPageComponent },
  { path: 'askingname', component: AskingnameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
