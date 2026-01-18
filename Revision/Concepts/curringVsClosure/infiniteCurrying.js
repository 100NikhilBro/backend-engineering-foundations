// infinite currying is a currying technique
// jisme hum fn ko kitni bhi baar call kr skte hai 
// yeh stop jb hota hai jb apun fn ko stop hone ka signal dete hai 


function sum(a) {
    let total = a; // closure

    return function next(b) {

        // stopping condn
        if (b === undefined) {
            return total;
        }
        total = total + b;
        return next; // recursion 
    }
}


console.log(sum(1)(2)(3)(4)());
sum(5)(10)();




// Real World - below eg -> isko implemnt krne ke liye we internally use the infinite currying 


// validate(user)
//     .isEmail()
//     .minLength(6)
//     .required()
//     .chek();










function mul(a) {
    let totalMul = a;
    return function next(b) {
        if (b === undefined) {
            return totalMul;
        }
        totalMul = totalMul * b;
        return next;
    }
}

console.log(mul(2)(3)(4)(5)(6)())