import { Recipe } from "./recipe";
import { Ingredient } from "../ingredient/ingredient";

export class RecipesIngredients{
 
    id;

    recipe:Recipe;

    ingredient:Ingredient;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}