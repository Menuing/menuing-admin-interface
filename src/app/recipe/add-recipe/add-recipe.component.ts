import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe';
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
      'proportions': ['',  Validators.required],
      'calories': ['',  Validators.required],
      'fat': ['',  Validators.required],
      'protein': ['',  Validators.required],
      'sodium': ['',  Validators.required],
      'urlPhoto': ['',  Validators.required]
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
    this.recipe = new Recipe();
    this.recipe = new Recipe(this.recipeForm.getRawValue());¡
    console.log(this.recipe);
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        recipe => {
          this.recipe.id = recipe
          this.router.navigate(['/recipes/'])
          for(var i=0;i<this.selectedIngredients.length;i++){
            this.recipeService.addRecipeIngredient(this.selectedIngredients[i], this.recipe)
            .subscribe()
          }
        },
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

  onItemDeSelect(item: any){
    var index = this.selectedIngredients.indexOf(item,0);
    var id = item.id;
    var index = this.selectedIngredients.findIndex(function(listItem, i){
      return listItem.id === id;
    });
    this.selectedIngredients.splice(index, 1);
  }

  onItemSelect(item: any) {
    this.selectedIngredients.push(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
