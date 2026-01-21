// .call(ctx,args1,args2,args3...so on)

Function.prototype.myCall = function(ctx = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('This is not a function');
    }
    ctx.fn = this;
    ctx.fn(...args);
}

function greet(msg, price) {
    console.log(`Hi ${this.name} , ${msg} and ${price}`);
}

const ctx = {
    name: "Raju"
}


greet.myCall(ctx, "GoodMorning", "1000");