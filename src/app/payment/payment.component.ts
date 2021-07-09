import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  paymentModel = new Payment('', '', 0);

  ngOnInit(): void {
  }

}
