import { Payment } from "../payment/payment.model";

export class Registration {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public address: string,
        public age: string,
        public phone: string,
        public email: string,
        public destinationFrom: string,
        public destinationTo: string,
        public flightDate: Date,
        public airline: string,
        public departureTime: string,
        public numberOfPassenger: number,
        public totalAmount: number,
        public payment: Payment
    ) {

    }
}