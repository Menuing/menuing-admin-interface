export class Nutritionist{

    id;

    username:string;

    password:string;

    isPremium:boolean;

    speciallity:string;

    dni:string;

    phoneNumber:string;

    averagePuntuation;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}