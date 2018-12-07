import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { RecipesIngredients } from '../recipesIngredients';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe :Recipe;
  recipesIngredients:RecipesIngredients[];
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.recipeService.getRecipe(id)
      .subscribe(
        (recipe: Recipe) => {
          this.recipe = recipe;
          this.recipeService.getRecipeIngredientByRecipe(this.recipe.id)
          .subscribe(
            (recipesIngredients: RecipesIngredients[]) => {
              this.recipesIngredients = recipesIngredients;
            },
            error => this.errorMessage = <any>error.message);
        },
        error => this.errorMessage = <any>error.message);
    
  }

  onDelete(){
    this.recipeService.deleteRecipeIngredient(this.recipe.id).subscribe(
      (ok) => {
        this.recipeService.deleteRecipe(this.recipe.id).subscribe(
          (ok) => {
            this.router.navigate(['/recipes/']);
          },
          error => this.errorMessage = <any>error.message
        );
      },
      error => this.errorMessage = <any>error.message
    );
  }

  onModify(){
    this.router.navigate(['/recipe-modify/'+this.recipe.id]);
  }
}
