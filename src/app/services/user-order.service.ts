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
  public numProductsSignal: Signal<number> = this._order.numProductSignal;
  public totalOrderSignal: Signal<number> = this._order.totalOrderSignal;

  public addProduct(product: ProductModel, quantity:number = 1){
    this._order.addProduct(product,quantity)
  }

  public oneMoserProduct(product: ProductModel){
    this._order.oneMoreProduct(product);
  }

  public oneLessProduct(product:ProductModel){
    this._order.oneLessProduct(product);
  }
  
  public resetOrder(){
    this._order.resetOrder();
  }

}
