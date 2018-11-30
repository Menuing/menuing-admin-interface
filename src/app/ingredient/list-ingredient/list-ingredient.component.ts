import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  public totalIngredients = 0;
  public errorMessage = '';

  public searchIngredientForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ingredientService: IngredientService) {
      this.searchIngredientForm = this.fb.group({
        'name': ['',  Validators.required]
      });
     }

  ngOnInit() {
    this.ingredientService.getAllIngredients()
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.totalIngredients = ingredients.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search(){
    var name = new Ingredient(this.searchIngredientForm.getRawValue()).name;
    this.ingredientService.getIngredientsByName(name)
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.totalIngredients = ingredients.length;
        },
        error => this.errorMessage = <any>error.message);}
}
