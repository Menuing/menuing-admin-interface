import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../recipe';
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
      'name': ['',  Validators.required],
      'instructions': ['',  Validators.required],
      'ingredients': ['',  Validators.required]
    });
  }

  ngOnInit() {

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

}
