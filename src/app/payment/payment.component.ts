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

  resetForm() {
    this.paymentModel.paidAmount = 0;
    this.paymentModel.paymentMode = '';
    this.paymentModel.referenceNumber = '';
    this.registrationFound = false;
    this.payableAmount = 0;
    this.numberOfPassenger = 0;
  }

  searchRegistrationByReferenceNumber() {
    this.registrationService.searchByReferenceNumber(this.paymentModel.referenceNumber).subscribe(response => {
      this.registrationFound = true;
      this.paymentModel.paidAmount = response.totalAmount;
    })
  }

  makePayment() {
    let response = "";
    this.service.makePayment(this.paymentModel).subscribe((response) => {
      alert("Payment Made Successfully.")
      this.resetForm();
    }, error => {
      if (error.status == 200) {
        alert("Payment Made Successfully.")
        this.resetForm();
      } else {
        alert(error.error)
      }
    }

    )
  }

}
