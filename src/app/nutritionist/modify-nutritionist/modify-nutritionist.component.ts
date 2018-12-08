import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionistService } from '../nutritionist.service';
import { Nutritionist } from '../nutritionist';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modify-nutritionist',
  templateUrl: './modify-nutritionist.component.html',
  styleUrls: ['./modify-nutritionist.component.css']
})
export class ModifyNutritionistComponent implements OnInit {

  nutritionist :Nutritionist;
  newNutritionist:Nutritionist;
  errorMessage = '';

  public nutritionistForm: FormGroup;
  public name: string;
  public instructions: string;
  public nutritionists: string;

  dropdownNutritionists = [];
  selectedNutritionists = [];
  dropdownSettings = {};

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute, 
    private router: Router, 
    private nutritionistService: NutritionistService) { 
    this.nutritionistForm = this.fb.group({
      'id': ['',  Validators.required],
      'username': ['',  Validators.required],
      'password': ['',  Validators.required],
      'speciallity': ['',  Validators.required],
      'dni': ['',  Validators.required],
      'phoneNumber': ['',  Validators.required]
    });
  }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.nutritionistService.getNutritionist(id)
      .subscribe(
        (nutritionist: Nutritionist) => {
          this.nutritionist = nutritionist;
          Object.keys(this.nutritionist).forEach(key => {
            if(this.nutritionistForm.controls[key] != undefined){
              this.nutritionistForm.controls[key].setValue(this.nutritionist[key]);
            }
          });
        },
        error => this.errorMessage = <any>error.message);
  }

  onSubmit(){
    this.newNutritionist = new Nutritionist(this.nutritionistForm.getRawValue());
    this.nutritionistService.modifyNutritionist(this.newNutritionist)
      .subscribe(
        nutritionist => {
          this.router.navigate(['/nutritionists/'])
        },
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
    
  }

  onItemDeSelect(item: any){
    console.log(this.selectedNutritionists)
  }

  onItemSelect(item: any) {
    console.log(this.selectedNutritionists)
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
