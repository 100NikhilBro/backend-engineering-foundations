// bind(ctx,args1,args2,...); ==> return a function

Function.prototype.myBind = function(ctx = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error('');
    }

    ctx.fn = this;
    return function(...newArgs) {
        return ctx.fn(...args, ...newArgs);
    }
}


function greet(msg, price) {
    console.log(this.name + " " + msg + "" + price);
}

const ctx = {
    name: "Tanu"
}

const fn = greet.myBind(ctx);
fn('Hello ji', ' 100');