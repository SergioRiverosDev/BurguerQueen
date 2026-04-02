import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Pipe({
  name: 'calculateTotalPrice',
  pure: false
})
export class CalculateTotalPricePipe implements PipeTransform {

  transform(product: ProductModel, quantity:number = 1): number {

    let priceProduct = product.price;

    if (product.extras) {
      
      priceProduct += product.extras.reduce((acc,extra)=>{
        return acc + extra.blocks.reduce((blockAcc,block)=>{
          const activateOpion = block.options.find(option => option.activate);
          return blockAcc + (activateOpion ? activateOpion.price : 0);
        },0);
      },0);

    }

    const total = priceProduct * quantity;

    return +total.toFixed(2);
  }

}
