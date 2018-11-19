export class Ingredient{
 
    id;

    name:string;

    nutrients:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}