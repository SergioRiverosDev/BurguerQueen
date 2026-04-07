import { computed, inject, Signal, signal, WritableSignal } from "@angular/core";
import { QuantityProductModel } from "./quantity-product.model";
import { ProductModel } from "./product.model";
import { CalculateTotalPricePipe } from "../pipes/calculate-total-price-pipe";
import { UserModel } from "./user.model";

export interface IOrder {
    _id?: string,
    address?: string,
    user: UserModel,
    products: QuantityProductModel[],
    date?: Date,
    total?: number,
    ticket?: number
}

export class OrderModel {

    private _productsSignal: WritableSignal<QuantityProductModel[]> = signal<QuantityProductModel[]>([]); 
    private calculatePriceOrder = inject(CalculateTotalPricePipe);
    private _numProductSignal:Signal<number> = computed(()=>this.numProducts());
    private _totalOrderSignal:Signal<number> = computed(()=>this.totalOrder());

    public get productSignal():Signal<QuantityProductModel[]>{
        return this._productsSignal.asReadonly();
    }

    public get numProductSignal():Signal<number>{
        return this._numProductSignal;
    }

    public get totalOrderSignal():Signal<number>{
        return this._totalOrderSignal;
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

    public oneMoreProduct(product: ProductModel){
        const productfound = this.searchProduct(product);
        if (productfound) {
            productfound.quantity++;
            this._productsSignal.set([...this._productsSignal()])
        }
    }

    public oneLessProduct(product: ProductModel){
        const productfound = this.searchProduct(product);
        if (productfound) {
            productfound.quantity--;
            if (productfound.quantity==0) {
                this.removeProduct(product)
            }else{
                this._productsSignal.set([...this._productsSignal()]);
            }
        }
    }

    public resetOrder(){
        this._productsSignal.set([]);
    }

    private removeProduct(productRemove:ProductModel){
        this._productsSignal.update(product => product.filter(
            (productQuantity: QuantityProductModel)=>
                JSON.stringify(productRemove) !== JSON.stringify(productQuantity.product)
        ))
    }

    private searchProduct(product: ProductModel): QuantityProductModel | undefined{
        return this._productsSignal().find((productQuantity: QuantityProductModel)=>
        JSON.stringify(product) === JSON.stringify(productQuantity.product));
    }

    private totalOrder(){
        return this._productsSignal().reduce((acum:number, value:QuantityProductModel)=> 
            this.calculatePriceOrder.transform(value.product,value.quantity) + acum, 0);
    }

    private numProducts(){
        return this.productSignal().reduce(
            (acum:number, value:QuantityProductModel)=> value.quantity + acum , 0
        )
    }

}
