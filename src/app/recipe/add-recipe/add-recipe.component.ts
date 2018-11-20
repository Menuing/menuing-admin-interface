import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../Recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import { IngredientService } from '../../ingredient/ingredient.service';
import { Ingredient } from '../../ingredient/ingredient';

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
  public current_selected: string;

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
    this.ingredientService.getAllIngredients()
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredientsList = ingredients;
      },
      error => this.errorMessage = <any>error.message);

  }

  onSubmit(): void {
    this.recipe = new Recipe(this.recipeForm.getRawValue());
    this.recipe.ingredients = this.current_selected;
    console.log(this.current_selected);
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        recipe => this.router.navigate(['/recipes/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  onSelection(e, v){
   this.current_selected = e.option.value;
  }

}
