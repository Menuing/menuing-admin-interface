import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RecipeCheckComponent } from './recipe/recipe-check/recipe-check.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { ModifyRecipeComponent } from './recipe/modify-recipe/modify-recipe.component';
import { AddNutritionistComponent } from './nutritionist/add-nutritionist/add-nutritionist.component';
import { ListNutritionistComponent } from './nutritionist/list-nutritionist/list-nutritionist.component';
import { DetailNutritionistComponent } from './nutritionist/detail-nutritionist/detail-nutritionist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { IngredientService } from './ingredient/ingredient.service';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { NutritionistService } from './nutritionist/nutritionist.service';
import { Ingredient } from './ingredient/ingredient';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecipeCheckComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
    ModifyRecipeComponent,
    AddNutritionistComponent,
    ListNutritionistComponent,
    DetailNutritionistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService, LoginService, NutritionistService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
