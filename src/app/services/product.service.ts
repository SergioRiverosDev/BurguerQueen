import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private URL_BASE= `${environment.urlServer}/v1/products`;
  private http = inject(HttpClient);

  getProducts(categoryId:string){
    return this.http.get<ProductModel[]>(`${this.URL_BASE}/category/${categoryId}`).pipe(first());
  }

  getProduct(id:string){
    return this.http.get<ProductModel>(`${this.URL_BASE}/${id}`).pipe(first());
  }

}
