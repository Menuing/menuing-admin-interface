import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeCheckComponent } from './recipe/recipe-check/recipe-check.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ModifyRecipeComponent } from './recipe/modify-recipe/modify-recipe.component';
import { ListNutritionistComponent } from './nutritionist/list-nutritionist/list-nutritionist.component';
import { DetailNutritionistComponent } from './nutritionist/detail-nutritionist/detail-nutritionist.component';
import { AddNutritionistComponent } from './nutritionist/add-nutritionist/add-nutritionist.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recipes', component: RecipeCheckComponent},
  {path: 'recipe-detail', component: RecipeDetailComponent},
  {path: 'recipe-add', component: AddRecipeComponent},
  {path: 'recipe-modify', component: ModifyRecipeComponent},
  {path: 'nutritionists', component: ListNutritionistComponent},
  {path: 'nutritionist-detail', component: DetailNutritionistComponent},
  {path: 'nutritionist-add', component: AddNutritionistComponent}
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
