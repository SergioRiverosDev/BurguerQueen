import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product',
  imports: [AsyncPipe, MatCardModule, TranslateModule, MatDivider],
  templateUrl: './product.html',
  styleUrl: './product.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class Product {

  private productService = inject(ProductService);
  private activatedRoute = inject(ActivatedRoute)

  public product$: Observable<ProductModel> = new Observable<ProductModel>();

  ngOnInit(){
    this.activatedRoute.params.subscribe({
      next:(params: Params)=> {
        const id = params['id']
        this.product$ = this.productService.getProduct(id)
      },
    })
  }

  addProduct(product:ProductModel){

  }

  goBack(){

  }
}
