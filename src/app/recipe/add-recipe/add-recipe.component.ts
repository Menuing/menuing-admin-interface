import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../Recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { IngredientService } from '../../ingredient/ingredient.service'
import { Ingredient } from 'src/app/ingredient/ingredient';

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

  dropdownIngredients = [];
  selectedIngredients = [];
  dropdownSettings = {};

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
          this.dropdownIngredients = [];
          for(var i = 0; i<ingredients.length; i++){
            this.dropdownIngredients.push(JSON.parse(JSON.stringify(ingredients[i])));
          }
          //this.dropdownIngredients = ingredients;
          this.selectedIngredients = [];
          this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 5,
            allowSearchFilter: true
          };
          console.log(this.dropdownIngredients);
        },
        error => this.errorMessage = <any>error.message);
    
  }

  onSubmit(): void {
    this.recipe = new Recipe(this.recipeForm.getRawValue());
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        recipe => this.router.navigate(['/recipes/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
