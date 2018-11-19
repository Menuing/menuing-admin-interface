export class Nutritionist{

    id;

    name:string;

    nutrients:string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}