import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Ingredient} from './ingredient';

@Injectable()
export class IngredientService{

    constructor(private http: HttpClient) {
    }
  
    getAllIngredients() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      console.log(`${environment.API}/api/resources/ingredients/all`)
      return this.http.get(`${environment.API}/api/resources/ingredients/all`, httpOptions);
    }
  
    getIngredient(id: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
      return this.http.get(`${environment.API}/api/resources/ingredients/id/${Number(id)}`, httpOptions);
    }
  
    addIngredient(ingredient: Ingredient) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Ingredient>(`${environment.API}/api/resources/ingredients`, ingredient, httpOptions);
    }
  
    deleteIngredient(id: Number) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
      return this.http.delete(`${environment.API}/api/resources/ingredients/delete/${id}`, httpOptions);
    }
}