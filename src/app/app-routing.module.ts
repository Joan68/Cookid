import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPageComponent } from './first-page/first-page.component';
import { AskingnameComponent } from './askingname/askingname.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'askingname', component: AskingnameComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipe', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
