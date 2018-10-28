import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RecipeCheckComponent } from './recipe/recipe-check/recipe-check.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipeCheckComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
