import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IOrder } from '../models/order.model';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  
  
  private URL_BASE= `${environment.urlServer}/v1/orders`;
  private http = inject(HttpClient);

  createOrder(order:IOrder,accessToken:string){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    })

    return this.http.post<IOrder>(this.URL_BASE,order, {headers}).pipe(first())
  }

}
