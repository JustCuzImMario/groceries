import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'



@Injectable()
export class GroceriesServiceService {
  
  items = [
    {
      name: "Milk",
      quantity: 2    
    },
    {
      name: "Bread",
      quantity: 1    
    },
    {
      name: "Banana",
      quantity: 3    
    },
    {
      name: "Sugar",
      quantity: 1    
    },
  ];

  constructor(public http: HttpClientModule) {
    console.log('Hello Groceries Service Provider');
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  editItem(item, index) {
    this.items[index] = item;

  }
  getItems() {
    return this.items;
  }


}
