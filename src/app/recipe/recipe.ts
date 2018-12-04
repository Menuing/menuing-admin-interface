
export class Recipe{
 
    id;

    name:string;

    instructions:string;

    proportions:string;

    calories:number;

    fat:number;

    protein:number;

    sodium:number;

    urlPhoto:string;

    averagePuntuation;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}