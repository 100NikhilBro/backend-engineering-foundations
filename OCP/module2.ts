interface INotification{
    send():void;
}

class emailService implements INotification{
    send(){}
}

class messageService implements INotification{
    send(){}
}

class INotificationProcessor{
    constructor(private notificationType:INotification){
    }

    notify(){
        this.notificationType.send();
    }
}



interface IPayment{
    pay():void;
}

class Stripe implements IPayment{
    pay(): void {
        
    }
}


class PayPal implements IPayment{
    pay(): void {
        
    }
}

class IPaymentProcessor {
    constructor(private payType:IPayment){

    }

    payNotify(){
        this.payType.pay();
    }
}



interface IDiscount{
    calculateDiscount():void;
}

class Percentage implements IDiscount{
    calculateDiscount(){}
}

class PromoCode implements IDiscount{
    calculateDiscount(): void {}
}

class IDiscountProcessor{
    constructor(private disType:IDiscount){}

    discount(){
        this.disType.calculateDiscount();
    }
}



class calculateTaxService{
    calculateTax(){}
}


