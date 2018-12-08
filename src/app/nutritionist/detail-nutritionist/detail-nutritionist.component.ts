import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NutritionistService } from '../nutritionist.service';
import { Nutritionist } from '../nutritionist';

@Component({
  selector: 'app-detail-nutritionist',
  templateUrl: './detail-nutritionist.component.html',
  styleUrls: ['./detail-nutritionist.component.css']
})
export class DetailNutritionistComponent implements OnInit {

  nutritionist :Nutritionist;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private nutritionistService: NutritionistService) { }

  ngOnInit() {
    var id = this.route.params['value'].id;
    this.nutritionistService.getNutritionist(id)
      .subscribe(
        (nutritionist: Nutritionist) => {
          this.nutritionist = nutritionist;
        },
        error => this.errorMessage = <any>error.message);
  }

  onDelete(){
    this.nutritionistService.deleteNutritionist(this.nutritionist.id).subscribe(
      (ok) => {
        this.router.navigate(['/nutritionists/']);
      },
      error => this.errorMessage = <any>error.message
    );
  }

  onModify(){
    this.router.navigate(['/nutritionist-modify/'+this.nutritionist.id]);
  }

}
