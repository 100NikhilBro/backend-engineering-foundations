// Open Close Principle 



// Currently - here we have only one method to support - creditCard

// class PaymentProcessor{
//     processPayment(amount:number){
//         console.log(`Processing Payment of ${amount} through credit card`);
//     }
// }

// const processor = new PaymentProcessor();
// processor.processPayment(100);

// =======================================================================

// Now we want to extend this - we add Payment Type

class PaymentProcessor{
    processPayment(amount:number,paymentType:string){
        
        if(paymentType==='CreditCard'){
            console.log(`Processing Payment of ${amount} through ${paymentType}`)
        }else if(paymentType==='BaharatPe'){
            console.log(`Processing Payment of ${amount} through ${paymentType}`)
        }else if(paymentType==='GooglePay'){
            console.log(`Processing Payment of ${amount} through ${paymentType}`)
        }
        else{
            throw new Error('Failed to Prceeds the pyament with anyType');
        }
        
        }
}

const process = new PaymentProcessor();
console.log(process.processPayment(100,'CreditCard'))


// ====================================

// Ab maanlo apne ko isme ek naya payment method add krna hai like apne ab yha pr Paytm add krna 

// for this ek treeka to yeh hai ki if else ko modify krde - to yahan pr ocp breaks

// next file - Payment_ocp.ts -> pr dekho   

