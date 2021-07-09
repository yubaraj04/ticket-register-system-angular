import { Component, OnInit } from '@angular/core';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service: PaymentService) { }

  paymentModel = new Payment('', '', 0);

  ngOnInit(): void {
  }
  makePayment() {
    this.service.makePayment(this.paymentModel).subscribe((response) =>
      alert("Payment Made Successfully.")

    )
  }

}
