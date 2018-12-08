import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../ingredient';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modify-ingredient',
  templateUrl: './modify-ingredient.component.html',
  styleUrls: ['./modify-ingredient.component.css']
})
export class ModifyIngredientComponent implements OnInit {

  ingredient :Ingredient;
  newIngredient:Ingredient;
  errorMessage = '';

  public ingredientForm: FormGroup;
  public name: string;
  public instructions: string;
  public ingredients: string;

  dropdownIngredients = [];
  selectedIngredients = [];
  dropdownSettings = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private ingredientService: IngredientService) { 
    this.ingredientForm = this.fb.group({
      'id': ['',  Validators.required],
      'name': ['',  Validators.required]
    });
  }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.ingredientService.getIngredient(id)
      .subscribe(
        (ingredient: Ingredient) => {
          this.ingredient = ingredient;
          Object.keys(this.ingredient).forEach(key => {
            if(this.ingredientForm.controls[key] != undefined){
              this.ingredientForm.controls[key].setValue(this.ingredient[key]);
            }
          });
        },
        error => this.errorMessage = <any>error.message);
  }

  onSubmit(){
    this.newIngredient = new Ingredient(this.ingredientForm.getRawValue());
    this.ingredientService.modifyIngredient(this.newIngredient)
      .subscribe(
        ingredient => {
          this.router.navigate(['/ingredients/'])
        },
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
    
  }

  onItemDeSelect(item: any){
    console.log(this.selectedIngredients)
  }

  onItemSelect(item: any) {
    console.log(this.selectedIngredients)
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
