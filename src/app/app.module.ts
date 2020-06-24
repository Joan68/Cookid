import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AskingnameComponent } from './askingname/askingname.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstPageComponent,
    AskingnameComponent,
    WelcomeComponent,
    RecipeListComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
