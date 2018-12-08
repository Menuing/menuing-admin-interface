import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RecipeCheckComponent } from './recipe/recipe-check/recipe-check.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ModifyRecipeComponent } from './recipe/modify-recipe/modify-recipe.component';
import { AddNutritionistComponent } from './nutritionist/add-nutritionist/add-nutritionist.component';
import { ModifyNutritionistComponent } from './nutritionist/modify-nutritionist/modify-nutritionist.component';
import { ListNutritionistComponent } from './nutritionist/list-nutritionist/list-nutritionist.component';
import { DetailNutritionistComponent } from './nutritionist/detail-nutritionist/detail-nutritionist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { NutritionistService } from './nutritionist/nutritionist.service';
import { IngredientService } from './ingredient/ingredient.service';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';
import { ModifyIngredientComponent } from './ingredient/modify-ingredient/modify-ingredient.component';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';
import { DetailIngredientComponent } from './ingredient/detail-ingredient/detail-ingredient.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipeCheckComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
    ModifyRecipeComponent,
    AddNutritionistComponent,
    ModifyNutritionistComponent,
    ListNutritionistComponent,
    DetailNutritionistComponent,
    AddIngredientComponent,
    ModifyIngredientComponent,
    ListIngredientComponent,
    DetailIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [RecipeService, LoginService, NutritionistService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
