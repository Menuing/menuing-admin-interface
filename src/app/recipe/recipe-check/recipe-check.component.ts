import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-check',
  templateUrl: './recipe-check.component.html',
  styleUrls: ['./recipe-check.component.css']
})
export class RecipeCheckComponent implements OnInit {

  public recipes: Recipe[] = [];
  public totalRecipes = 0;
  public errorMessage = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          this.totalRecipes = recipes.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search(recipe) {
    
  }

}
