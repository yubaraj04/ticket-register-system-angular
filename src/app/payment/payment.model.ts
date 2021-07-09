export class Payment {
    constructor(
        public reserveReferenceNumber: string,
        public paymentMode: string,
        public paidAmount: Number
    ) {

    }
}