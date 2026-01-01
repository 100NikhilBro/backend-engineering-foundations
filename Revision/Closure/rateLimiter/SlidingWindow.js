function createSlidingWindowLimiter(limit, timeWindow) {

    let timestamps = [];

    return function() {

        const now = Date.now();

        timestamps = timestamps.filter(
            (time) => now - time < timeWindow
        )


        if (timestamps.length < limit) {
            timestamps.push(now);
            return "Req Allowed";
        } else {
            return "time Limit Exceed";
        }

    }
}


const limiter = createSlidingWindowLimiter(3, 5000);

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

setTimeout(() => {
    console.log(limiter());
}, 5000);