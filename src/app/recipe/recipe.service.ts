import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Recipe} from './recipe';
import { Ingredient } from '../ingredient/ingredient';

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
    return this.http.get(`${environment.API}/api/resources/recipes/?nameLike=${name}`, httpOptions);
    
  }

  getRecipeIngredientByRecipe(id: number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(`${environment.API}/api/resources/recipesIngredients/?recipeId=${id}`, httpOptions);
  }

  addRecipe(recipe: Recipe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Recipe>(`${environment.API}/api/resources/recipes`, recipe, httpOptions);
  }

  addRecipeIngredient(selectedItem:Ingredient, recipe:Recipe){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    var json: JSON;
    var body:any ={"key":{"ingredientId":selectedItem.id, "recipeId":recipe.id}}
    json = <JSON>body;
    return this.http.post<Recipe>(`${environment.API}/api/resources/recipesIngredients`, json, httpOptions);
  }


  deleteRecipe(id: Number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.delete(`${environment.API}/api/resources/recipes/delete/${id}`, httpOptions);
  }
}