import { Foods } from "../../app.module";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
        // this.price;//javascript code, we can right this code

    }
    food:Foods;
    quantity:number=1;
    get price():number{
        return this.food.price * this.quantity;
    }

}