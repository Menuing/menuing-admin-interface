import { Component, OnInit } from '@angular/core';
import {NutritionistService} from '../nutritionist.service';
import {Nutritionist} from '../nutritionist';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-nutritionist',
  templateUrl: './list-nutritionist.component.html',
  styleUrls: ['./list-nutritionist.component.css']
})
export class ListNutritionistComponent implements OnInit {

  public nutritionists: Nutritionist[] = [];
  public totalNutritionists = 0;
  public errorMessage = '';

  public searchNutritionistForm:FormGroup;

  constructor(private fb: FormBuilder, 
    private nutritionistService: NutritionistService) {
    this.searchNutritionistForm = this.fb.group({
      'username': ['',  Validators.required]
    });}

  ngOnInit() {
    this.nutritionistService.getAllNutritionists()
      .subscribe(
        (nutritionists: Nutritionist[]) => {
          this.nutritionists = nutritionists;
          this.totalNutritionists = nutritionists.length;
        },
        error => this.errorMessage = <any>error.message);
  }

  search() {
    var name = new Nutritionist(this.searchNutritionistForm.getRawValue()).username;
    this.nutritionistService.getNutritionistByName(name)
      .subscribe(
        (nutritionists: Nutritionist[]) => {
          this.nutritionists = nutritionists;
          this.totalNutritionists = nutritionists.length;
        },
        error => this.errorMessage = <any>error.message);
  }
}
