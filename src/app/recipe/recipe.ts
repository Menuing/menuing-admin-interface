    
export class Recipe{
 
    id;

    name:string;

    instructions:string;

    ingredients:string;

    urlPhoto:string;

    averagePuntuation;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}