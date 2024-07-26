import { CartService } from './../services/cart.service';
import { FoodService } from './../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Foods } from '../app.module';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
  food!:Foods;
  constructor(private activatedRoute:ActivatedRoute,
    private FoodService:FoodService, 
    private cartService:CartService,
    private router:Router ){
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = FoodService.getFoodById(params['id'])
      })
    }
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
  }
}
