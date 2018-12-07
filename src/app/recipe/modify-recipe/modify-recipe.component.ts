import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { RecipesIngredients } from '../recipesIngredients';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../../ingredient/ingredient.service'
import { Ingredient } from 'src/app/ingredient/ingredient';


@Component({
  selector: 'app-modify-recipe',
  templateUrl: './modify-recipe.component.html',
  styleUrls: ['./modify-recipe.component.css']
})
export class ModifyRecipeComponent implements OnInit {

  recipe :Recipe;
  recipesIngredients:RecipesIngredients[];
  errorMessage = '';

  public recipeForm: FormGroup;
  public name: string;
  public instructions: string;
  public ingredients: string;

  dropdownIngredients = [];
  selectedIngredients = [];
  dropdownSettings = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private recipeService: RecipeService, 
    private ingredientService: IngredientService) { 
    this.recipeForm = this.fb.group({
      'id': ['',  Validators.required],
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
    this.ingredientService.getAllIngredients()
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.dropdownIngredients = [];
        for(var i = 0; i<ingredients.length; i++){
          this.dropdownIngredients.push(JSON.parse(JSON.stringify(ingredients[i])));
        }
        this.recipeService.getRecipeIngredientByRecipe(this.recipe.id)
          .subscribe(
            (recipesIngredients: RecipesIngredients[]) => {
              this.recipesIngredients = recipesIngredients;
              this.selectedIngredients = [];
              for(var i = 0; i<recipesIngredients.length; i++){
                this.selectedIngredients.push(JSON.parse(JSON.stringify(recipesIngredients[i].ingredient)));
              }
            },
            error => this.errorMessage = <any>error.message);
        
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

  onSubmit(){
    
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
