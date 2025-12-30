import { Order } from "./Order";

export class PaymenstPricess{
    processPayment(order:Order){
        console.log('Processing payment');
        console.log('Paymenst processed successfully')
        console.log('Added to accounting system');
        console.log(`Email sent to customer`);
    } 
}