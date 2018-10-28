import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeCheckComponent } from './recipe/recipe-check/recipe-check.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recipes', component: RecipeCheckComponent},
  {path: 'recipe-detail', component: RecipeDetailComponent}
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
