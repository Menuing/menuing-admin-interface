import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Nutritionist} from '../nutritionist';
import {Router} from '@angular/router';
import {NutritionistService} from '../nutritionist.service';

@Component({
  selector: 'app-add-nutritionist',
  templateUrl: './add-nutritionist.component.html',
  styleUrls: ['./add-nutritionist.component.css']
})
export class AddNutritionistComponent implements OnInit {

  public nutritionist: Nutritionist;
  public nutritionistForm: FormGroup;
  public errorMessage: string;
  public name: string;
  public instructions: string;
  public ingredients: string;

  constructor(private fb: FormBuilder,
              private router: Router,
              private nutritionistService: NutritionistService) {
    this.nutritionistForm = this.fb.group({
      'username': ['',  Validators.required],
      'password': ['',  Validators.required],
      'speciallity': ['',  Validators.required],
      'dni': ['',  Validators.required],
      'phoneNumber': ['',  Validators.required]
    });
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.nutritionist = new Nutritionist(this.nutritionistForm.getRawValue());
    this.nutritionistService.addNutritionist(this.nutritionist)
      .subscribe(
        recipe => this.router.navigate(['/nutritionists/']),
        error => {
          this.errorMessage = error.errors ? <any>error.errors[0].message : <any>error.message;
        });
  }
}
