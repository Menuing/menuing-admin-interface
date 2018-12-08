import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Nutritionist} from './nutritionist';

@Injectable()
export class NutritionistService{

    constructor(private http: HttpClient) {
    }
  
    getAllNutritionists() {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
  
      return this.http.get(`${environment.API}/api/resources/nutritionists/all`, httpOptions);
    }
  
    getNutritionist(id: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
      return this.http.get(`${environment.API}/api/resources/nutritionists/id/${Number(id)}`, httpOptions);
    }

    getNutritionistByName(name: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.get(`${environment.API}/api/resources/nutritionists/?nameLike=${name}`, httpOptions);
      
    }
  
    addNutritionist(nutritionist: Nutritionist) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.post<Nutritionist>(`${environment.API}/api/resources/nutritionists`, nutritionist, httpOptions);
    }
  
    deleteNutritionist(id: Number) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      
      return this.http.delete(`${environment.API}/api/resources/nutritionists/delete/${id}`, httpOptions);
    }

    modifyNutritionist(nutritionist: Nutritionist) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      return this.http.put<Nutritionist>(`${environment.API}/api/resources/nutritionists`, nutritionist, httpOptions);
    }
}