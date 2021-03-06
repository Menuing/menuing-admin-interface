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
import { ModifyNutritionistComponent } from './nutritionist/modify-nutritionist/modify-nutritionist.component';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';
import { ModifyIngredientComponent } from './ingredient/modify-ingredient/modify-ingredient.component';
import { DetailIngredientComponent } from './ingredient/detail-ingredient/detail-ingredient.component';
import { FirebaseComponent } from './firebase/firebase.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'recipes', component: RecipeCheckComponent},
  {path: 'recipe/:id', component: RecipeDetailComponent},
  {path: 'recipe-add', component: AddRecipeComponent},
  {path: 'recipe-modify/:id', component: ModifyRecipeComponent},
  {path: 'nutritionists', component: ListNutritionistComponent},
  {path: 'nutritionist/:id', component: DetailNutritionistComponent},
  {path: 'nutritionist-add', component: AddNutritionistComponent},
  {path: 'nutritionist-modify/:id', component: ModifyNutritionistComponent},
  {path: 'ingredients', component: ListIngredientComponent},
  {path: 'ingredient-add', component: AddIngredientComponent},
  {path: 'ingredient-modify/:id', component: ModifyIngredientComponent},
  {path: 'ingredient/:id', component: DetailIngredientComponent},
  {path: 'firebase', component: FirebaseComponent}
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }