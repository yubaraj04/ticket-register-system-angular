import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payment } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = environment.baseUrl;
  private resourceUrl = this.baseUrl + "payment/save";

  constructor(private http: HttpClient) { }

  public makePayment(paymentModel: any) {
    return this.http.post<Payment>(this.resourceUrl, paymentModel);
  }
}
