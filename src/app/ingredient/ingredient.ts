export class Ingredient{

    id;

    name:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}