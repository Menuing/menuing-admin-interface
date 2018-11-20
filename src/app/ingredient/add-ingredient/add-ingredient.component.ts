import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../Ingredient';
import {Router} from '@angular/router';
import {IngredientService} from '../ingredient.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {  
  public ingredient: Ingredient;
  public ingredientForm: FormGroup;
  public errorMessage: string;
  public name: string;
  public nutrients: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private ingredientService: IngredientService) {
    this.ingredientForm = this.fb.group({
      'name': ['',  Validators.required],
      'nutrients': ['',  Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.ingredient = new Ingredient(this.ingredientForm.getRawValue());
    this.ingredientService.addIngredient(this.ingredient)
      .subscribe(
        ingredient => this.router.navigate(['/ingredients/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }

}
