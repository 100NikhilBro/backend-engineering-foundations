

interface IPaymentProcessor{
    processPayment(amount:number):void;
}


class PaymentProcessor{

    processor:IPaymentProcessor;

    constructor(paymentProcessor:IPaymentProcessor){
        this.processor = paymentProcessor;
    }

    processPayment(amount:number,){
        this.processor.processPayment(amount); 
    }

}


class CreditCardProcessor implements IPaymentProcessor{
    processPayment(amount: number) {
        console.log(`Processing credit card paymnet of `, amount);
    }
}

// ab maanlo ko apne ko nay add rkna hai like Paytm to apana - PaymnetProcessror modification ke liye close 

// but extend kr skte hai 

class PaytmProcessor implements IPaymentProcessor{
    processPayment(amount: number): void {
    console.log(`The amount is processed by ${amount}`);
    }
}

// aur bhi bna skte hai 

