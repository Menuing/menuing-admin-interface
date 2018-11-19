import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-detail-ingredient',
  templateUrl: './detail-ingredient.component.html',
  styleUrls: ['./detail-ingredient.component.css']
})
export class DetailIngredientComponent implements OnInit {
  ingredient :Ingredient;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private ingredientService: IngredientService) { }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.ingredientService.getIngredient(id)
      .subscribe(
        (ingredient: Ingredient) => {
          this.ingredient = ingredient;
        },
        error => this.errorMessage = <any>error.message);
  }

  onDelete(){
    this.ingredientService.deleteIngredient(this.ingredient.id).subscribe(
      (ok) => {
        this.router.navigate(['/ingredients/']);
      },
      error => this.errorMessage = <any>error.message
    );
  }
}
