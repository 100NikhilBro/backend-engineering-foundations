interface IFare{
    calculateFare():number
}

class SurgePricing implements IFare{
    calculateFare(): number {
        return 1;
    }
}

class Discount implements IFare{
    calculateFare(): number {
        return 1;
    }
}

class PromoCode implements IFare{
    calculateFare(): number {
        return 1;
    }
}

class FareProcessor {
    constructor(private fairType:IFare){

    }

    fair(){
        this.fairType.calculateFare();
    }
}

class MatchingDriverService{
    matchDriverAlgo(){}
}


interface IPayment{
    processpayment():void;
}

class creditCard implements IPayment{
    processpayment(): void {
        
    }
}

class Wallet implements IPayment{
    processpayment(): void {
        
    }
}




class JourneyDetials{
    tripDetails(){}
}

class TripLogs{
    auditLogs(){}
}

class DriverOps{
    updateRatingforDrivers(){}
}

class RiderOps{
    updateRatingforRiders(){}
}

class HandlingCncelation{
    cancel(){}
}

class handlingRefund{
    refund(){}
}