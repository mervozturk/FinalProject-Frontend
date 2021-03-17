import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartıtem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId==product.categoryId)
    if(item){
      item.quantity+=1;
      
    }else{
      let carItem= new CartItem();
      carItem.product=product;
      carItem.quantity=1;
      CartItems.push(carItem)
    }
  }

  list():CartItem[]{
    return CartItems;
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId==product.categoryId);
    CartItems.splice(CartItems.indexOf(item),1)
  }
}
