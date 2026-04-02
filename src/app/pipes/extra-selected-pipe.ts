import { Pipe, PipeTransform } from '@angular/core';
import { ProductsExtraOptions } from '../models/product.model';

@Pipe({
  name: 'extraSelected',
  pure: false
})
export class ExtraSelectedPipe implements PipeTransform {

  transform(options: ProductsExtraOptions[]): ProductsExtraOptions|undefined {
    return options.find( option => option.activate);
  }

}
