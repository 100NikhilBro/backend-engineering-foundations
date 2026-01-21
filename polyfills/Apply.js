// .apply(ctx,[])


Function.prototype.myApply = function(ctx = {}, args = []) {
    if (typeof this !== 'function') {
        throw new Error('This is not an function');
    }

    if (!Array.isArray(args)) {
        throw new Error('Argumenst must be an Array');
    }

    ctx.fn = this;
    ctx.fn(...args);
}


function greet(msg, price) {
    console.log(`Hi ${this.name}, ${msg} and ${price}`);
}

const ctx = { name: "Raju" };


greet.myApply(ctx, ['GoodMorning', '1000']);