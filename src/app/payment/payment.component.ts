import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration/registration.service';
import { Payment } from './payment.model';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service: PaymentService, private registrationService: RegistrationService) { }

  registrationFound: boolean = false;
  payableAmount: number = 0;
  numberOfPassenger: number = 0;

  paymentModel = new Payment('', '', 0);

  ngOnInit(): void {
  }

  searchRegistrationByReferenceNumber() {
    this.registrationService.searchByReferenceNumber(this.paymentModel.referenceNumber).subscribe(response => {
      this.registrationFound = true;
      this.paymentModel.paidAmount = response.totalAmount;
    })
  }

  makePayment() {
    this.service.makePayment(this.paymentModel).subscribe((response) =>
      alert("Payment Made Successfully.")

    )
  }

}
