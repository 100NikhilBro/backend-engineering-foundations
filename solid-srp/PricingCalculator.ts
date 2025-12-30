import { Product } from "./Order";

export class PricingCalculator{
    calculatePricing(products:Product[]){
        const price = products.reduce((acc,crr)=>{
            return acc + crr.price;
        },0)
        return price;
    }
}