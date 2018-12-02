import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-check',
  templateUrl: './recipe-check.component.html',
  styleUrls: ['./recipe-check.component.css']
})
export class RecipeCheckComponent implements OnInit {

  public recipes: Recipe[] = [];
  public totalRecipes = 0;
  public errorMessage = '';

  public searchRecipeForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private recipeService: RecipeService) { 
    this.searchRecipeForm = this.fb.group({
      'name': ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.recipeService.getAllRecipes()
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          this.totalRecipes = recipes.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search() {
    var name = new Recipe(this.searchRecipeForm.getRawValue()).name;
    this.recipeService.getRecipeByName(name)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
          this.totalRecipes = recipes.length;
        },
        error => this.errorMessage = <any>error.message);
  }

}
