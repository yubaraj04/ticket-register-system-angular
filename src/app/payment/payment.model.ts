export class Payment {
    constructor(
        public referenceNumber: string,
        public paymentMode: string,
        public paidAmount: Number
    ) {

    }
}