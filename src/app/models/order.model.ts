import { Signal, signal, WritableSignal } from "@angular/core";
import { QuantityProductModel } from "./quantity-product.model";
import { ProductModel } from "./product.model";

export class OrderModel {

    private _productsSignal: WritableSignal<QuantityProductModel[]> = signal<QuantityProductModel[]>([]); 

    public get productSignal():Signal<QuantityProductModel[]>{
        return this._productsSignal.asReadonly();
    }

    public addProduct(product: ProductModel, quantity:number = 1){
        
        const products = this._productsSignal();
        const productFound = this.searchProduct(product);

        if (productFound) {
            productFound.quantity += quantity;
        }else{
            products.push({
                product,
                quantity
            })
        }

        this._productsSignal.set([...products])
    }

    private searchProduct(product: ProductModel): QuantityProductModel | undefined{
        return this._productsSignal().find((productQuantity: QuantityProductModel)=>
        JSON.stringify(product) === JSON.stringify(productQuantity.product));
    }

}
