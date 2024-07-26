import { FoodService } from './../services/food/food.service';
import { CartItem } from './../share/models/cartItem';

import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../share/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!: Cart;

  constructor(private cartService: CartService){
    // private foodService: FoodService){
    //   let foods= foodService.getAll();
    //   cartService.addToCart(foods[1]);
    //   cartService.addToCart(foods[3]);
    //   cartService.addToCart(foods[5]);    
      this.setCart();
  }
    ngOnInit(): void {

    }
  
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();// instant load data
  }
  changeQuantity(cartItem:CartItem, qualityInString:string){
    const quantity = parseInt(qualityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
