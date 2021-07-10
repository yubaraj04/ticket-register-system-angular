import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Payment } from '../payment/payment.model';
import { Registration } from './registration.model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  airlineSelected = false;
  timeOne = false;
  timeTwo = false;
  timeThree = false;
  pricePerPerson = 0;
  totalPrice = 0;
  referenceNumber = ""

  getSelectedAirline(el: string) {
    this.airlineSelected = true
  }
  getChangedTime(el: string) {
    if (el == "9:15") {
      this.registrationModel.departureTime = el;
      this.timeOne = true;
      this.timeTwo = false;
      this.timeThree = false;
      this.pricePerPerson = 3000;
    }
    else if (el == "1:30") {
      this.registrationModel.departureTime = el;
      this.timeTwo = true;
      this.timeOne = false;
      this.timeThree = false;
      this.pricePerPerson = 4000;
    }
    else if (el == "4:45") {
      this.registrationModel.departureTime = el;
      this.timeThree = true;
      this.timeOne = false;
      this.timeTwo = false;
      this.pricePerPerson = 5000;
    }
  }

  onChangeNumberOfPassengers() {
    this.registrationModel.totalAmount = this.registrationModel.numberOfPassenger * this.pricePerPerson;
  }
  constructor(private service: RegistrationService) { }

  registrationModel = new Registration('', '', '', '', '', '', '', '', '', new Date, '', '', 0, 0, new Payment('', '', 0), '');


  ngOnInit(): void {
    this.getReferenceNumber();
  }

  createRegistration(): any {
    this.service.createRegistration(this.registrationModel).subscribe((response) => {
      alert("Successfully Added");
      this.resetForm();
    }, error => {
      if (error.status == 200) {
        alert("Successfully Added");
        this.resetForm();
      }
      else {
        alert("Failed")
      }
    }
    )
  }

  resetForm() {
    this.registrationModel.firstName = "";
    this.registrationModel.middleName = "";
    this.registrationModel.lastName = "";
    this.registrationModel.address = "";
    this.registrationModel.age = "";
    this.registrationModel.phone = "";
    this.registrationModel.email = "";
    this.registrationModel.destinationFrom = "";
    this.registrationModel.destinationTo = "";
    this.registrationModel.flightDate = new Date();
    this.registrationModel.airline = "";
    this.registrationModel.departureTime = "";
    this.registrationModel.numberOfPassenger = 0;
    this.registrationModel.totalAmount = 0;
    this.registrationModel.payment = new Payment('', '', 0);
    this.registrationModel.referenceNumber = '';
    this.getReferenceNumber();
    this.airlineSelected = false;
    this.timeOne = false;
    this.timeTwo = false;
    this.timeThree = false;
  }

  getReferenceNumber(): void {
    this.service.getReferenceNumber().subscribe((response: any) => {
      this.referenceNumber = response.referenceNumber;
      this.registrationModel.referenceNumber = response.referenceNumber;
    },
      error => {
        console.log(error)
      },
    )
  }


}
