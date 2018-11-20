import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../Recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import { IngredientService } from '../../ingredient/ingredient.service';
import { Ingredient } from '../../ingredient/ingredient';
import $ = require('jquery');

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  public recipe: Recipe;
  public recipeForm: FormGroup;
  public errorMessage: string;
  public name: string;
  public instructions: string;
  public ingredients: string;
  public ingredientsList: Ingredient[];
  public current_selected: string[];

  constructor(private fb: FormBuilder,
              private router: Router,
              private recipeService: RecipeService,
              private ingredientService: IngredientService) {
    this.recipeForm = this.fb.group({
      'name': ['',  Validators.required],
      'instructions': ['',  Validators.required],
      'ingredients': ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.current_selected = [];
    this.ingredientService.getAllIngredients()
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredientsList = ingredients;
      },
      error => this.errorMessage = <any>error.message);
      
  }

  onSubmit(): void {
    this.recipe = new Recipe(this.recipeForm.getRawValue());
    this.recipe.ingredients = "";
    for (var i = 0; i<this.current_selected.length;i++){
      if(i>0){
        this.recipe.ingredients += ", "  
      }
      this.recipe.ingredients += this.current_selected[i];
    }
    console.log(this.current_selected);
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        recipe => this.router.navigate(['/recipes/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  onSelection(e, v){
    console.log(e.option._selected);
    if(e.option._selected == true){
      var tmp = []; 
      this.current_selected.push(e.option.value.name);
      $.each(this.current_selected, function(i, el){
        if($.inArray(el, tmp) === -1) tmp.push(el);
    });
    this.current_selected = tmp;
    }
  }

}
