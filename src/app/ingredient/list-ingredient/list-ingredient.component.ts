import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  public totalIngredients = 0;
  public errorMessage = '';

  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.getAllIngredients()
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.totalIngredients = ingredients.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search(ingredient){}
}
