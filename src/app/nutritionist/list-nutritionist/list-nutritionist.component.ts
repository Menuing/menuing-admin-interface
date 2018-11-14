import { Component, OnInit } from '@angular/core';
import {NutritionistService} from '../nutritionist.service';
import {Nutritionist} from '../nutritionist';

@Component({
  selector: 'app-list-nutritionist',
  templateUrl: './list-nutritionist.component.html',
  styleUrls: ['./list-nutritionist.component.css']
})
export class ListNutritionistComponent implements OnInit {

  public nutritionists: Nutritionist[] = [];
  public totalNutritionists = 0;
  public errorMessage = '';

  constructor(private nutritionistService: NutritionistService) { }

  ngOnInit() {
    this.nutritionistService.getAllNutritionists()
      .subscribe(
        (nutritionists: Nutritionist[]) => {
          this.nutritionists = nutritionists;
          this.totalNutritionists = nutritionists.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search(nutritionist){}
}
