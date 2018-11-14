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
import { ListNutritionistComponent } from './nutritionist/list-nutritionist/list-nutritionist.component';
import { DetailNutritionistComponent } from './nutritionist/detail-nutritionist/detail-nutritionist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from './recipe/recipe.service';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
