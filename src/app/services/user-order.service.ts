import { Injectable, Signal } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { QuantityProductModel } from '../models/quantity-product.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class UserOrderService {

  private _order: OrderModel = new OrderModel();

  public productsSignals: Signal<QuantityProductModel[]> = this._order.productSignal;

  public addProduct(product: ProductModel, quantity:number = 1){
    this._order.addProduct(product,quantity)
  }
  
}
