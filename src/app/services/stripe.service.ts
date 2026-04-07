import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreatePaymentIntentModel } from '../models/create-payment-intent.model';
import { first } from 'rxjs';
import { PaymentModel } from '../models/payment.model';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  
  
  private URL_BASE= `${environment.urlServer}/v1/stripe`;
  private http = inject(HttpClient);

  createPaymentSheet(paymentIntent:CreatePaymentIntentModel){

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${paymentIntent.secretKey}`
    })

    return this.http.post<PaymentModel>(`${this.URL_BASE}/intent`, paymentIntent,{headers}).pipe(first())

  }

}
