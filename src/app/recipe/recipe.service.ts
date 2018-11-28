import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Recipe} from './recipe';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getAllRecipes() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get(`${environment.API}/api/resources/recipes/all`, httpOptions);
  }

  getRecipe(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.get(`${environment.API}/api/resources/recipes/id/${Number(id)}`, httpOptions);
  }

  getRecipeByName(name: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(`${environment.API}/api/resources/recipes/?nameLike=${name}`)
    return this.http.get(`${environment.API}/api/resources/recipes/?nameLike=${name}`, httpOptions);
    
  }

  addRecipe(recipe: Recipe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Recipe>(`${environment.API}/api/resources/recipes`, recipe, httpOptions);
  }

  /*updateRecipe(recipe: Recipe): Observable<Recipe> {
    const body = JSON.stringify(recipe);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.put(
      `${environment.API}/courts/${court.id}`, body, options)
      .map((res: Response) => new Court(res.json()))
      .catch((error: any) => Observable.throw(error.json()));
  }*/

  deleteRecipe(id: Number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.delete(`${environment.API}/api/resources/recipes/delete/${id}`, httpOptions);
  }
}