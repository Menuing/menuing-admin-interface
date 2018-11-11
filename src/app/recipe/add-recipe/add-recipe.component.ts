import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../Recipe';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

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

  constructor(private fb: FormBuilder,
              private router: Router,
              private recipeService: RecipeService) {
    this.recipeForm = this.fb.group({
      'name': ['name',  Validators.required],
      'instructions': ['instructions',  Validators.required],
      'ingredients': ['ingredients',  Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.recipe = new Recipe();
    this.recipe.name = this.name;
    this.recipe.instructions = this.instructions;
    this.recipe.ingredients = this.ingredients;
    this.recipeService.addRecipe(this.recipe)
      .subscribe(
        recipe => this.router.navigate(['/recipes/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

}
