import { Injectable } from '@angular/core';
import { Foods } from "../../app.module";
import { Tag } from '../../share/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }

     getAllFoodByTag(tag :string): Foods[]{
        return tag == "All" ?
         this.getAll(): this.getAll().filter(food => food.tags?.includes(tag));
      //we can right 
     }
    getAllTag():Tag[]{
      return[
        { name :'All', count:8},
        {name :'FastFood',count:5},
        { name :'Pizza', count:2},
        {name :'Lunch',count:4},
        { name :'SlowFood', count:2},
        {name :'Hamburgur',count:1},
        { name :'Fry', count:2},
        {name :'Soup',count:1},

      ];
    }

  getAll():Foods[]{
    return[

      {
        id: 1,
        name: 'Pizza Papperoni',
        cookTime: '10-20',
        price: 10,
        favorite: true,
        origines: ['italy'],
        stars: 4.5,
        imageUrl: "/assets/img-1.jpg",
        tags: ['Pizza','Lunch'],
      },
      {
        id: 2,
        name: 'Burgur',
        cookTime: '5-10',
        price: 5,
        favorite: true,
        origines: ['Germany','Indian'],
        stars: 4.7,
        imageUrl: "/assets/img-2.png",
        tags: ['FastFood','Lunch','Hamburgur'],
      },
      {
        id: 3,
        name: 'Mutton Biryani',
        cookTime: '20-25',
        price: 4,
        favorite: true,
        origines: ['India-hydrabad'],
        stars: 4.5,
        imageUrl: "/assets/img-8.jpeg",
        tags:['Lunch','SlowFood'],
      },
      {
        id: 4,
        name: 'Chicken Soup',
        cookTime: '10-20',
        price: 8,
        favorite: false,
        origines: ['India'],
        stars: 4.5,
        imageUrl: "/assets/img-4.jpg",
        tags: ['FastFood','Soup'],
      },
      {
        id: 5,
        name: 'Chicken Pizza',
        cookTime: '12-30',
        price: 10,
        favorite: true,
        origines: ['italy','Mosco'],
        stars: 4.5,
        imageUrl: "/assets/img-5.jpg",
        tags: ['Pizza','Lunch','SlowFood'],
      },
      {
        id: 6,
        name: 'Chicken Lolipop',
        cookTime: '10-20',
        price: 5,
        favorite: false,
        origines: ['indian Asia'],
        stars: 4,
        imageUrl: "/assets/img-6.jpeg",
        tags: ['FastFood','Fry'],
      },
      {
        id: 7,
        name: 'Momo',
        cookTime: '5-10',
        price: 1,
        favorite: true,
        origines: ['france','italy','indian'],
        stars: 4.5,
        imageUrl: "/assets/img-3.png",
        tags: ['FastFood'],
      },
      {
        id: 8,
        name: 'Chicken Roll',
        cookTime: '20-25',
        price: 4,
        favorite: false,
        origines: ['italy'],
        stars: 4.5,
        imageUrl: "/assets/img-7.jpg",
        tags: ['FastFood','Fry'],
      },
     
    ];
  }
}
