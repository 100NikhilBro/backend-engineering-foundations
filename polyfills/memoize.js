function memoize(fn) {
    let cache = new Map();
    return function(...args) {

        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }

        const res = fn.apply(this, args);
        cache.set(key, res);

        return res;
    }
}



function sum(num1, num2) {
    for (let i = 0; i <= 100000000; i++) {};
    return num1 + num2;
}


const cacheSum = memoize(sum);

console.time("FirstCall");
console.log(cacheSum(2345, 12345432));
console.timeEnd("FirstCall");


console.time("SecondCall");
console.log(cacheSum(2345, 12345432));
console.timeEnd("SecondCall");