// infinite currying is a currying technique
// jisme hum fn ko kitni bhi baar call kr skte hai 
// yeh stop jb hota hai jb apun fn ko stop hone ka signal dete hai 


function sum() {
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


sum(1)(2)(3)(4)();
sum(5)(10)();




// Real World - below eg -> isko implemnt krne ke liye we internally use the infinite currying 


validate(user)
    .isEmail()
    .minLength(6)
    .required()
    .chek();