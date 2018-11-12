import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe :Recipe;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.recipeService.getRecipe(id)
      .subscribe(
        (recipe: Recipe) => {
          this.recipe = recipe;
        },
        error => this.errorMessage = <any>error.message);
  }

}
