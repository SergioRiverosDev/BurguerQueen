import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { first, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [AsyncPipe, MatCardModule, TranslateModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Products {

  private activateRouter = inject(ActivatedRoute);
  private productsService = inject(ProductService);

  public products$: Observable<ProductModel[]> = new Observable<ProductModel[]>(); 

  ngOnInit(){
    this.activateRouter.params.pipe(first()).subscribe({
      next:(params:Params)=> {
        const categoryId = params['categoryId'];
        this.products$ = this.productsService.getProducts(categoryId);
      },
    })
  }


}
