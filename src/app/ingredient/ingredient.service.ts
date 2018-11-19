import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Ingredient} from './ingredient';

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) {
  }
    
  getAllIngredients() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(`${environment.API}/api/resources/ingredients/all`, httpOptions);
  }
}