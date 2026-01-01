function createRateLimiter(limit, timeWindow) {

    let requestCount = 0;
    let windowStartTime = Date.now();

    return function() {

        const currentTime = Date.now();

        if (currentTime - windowStartTime >= timeWindow) {
            requestCount = 0;
            windowStartTime = currentTime;
        }


        if (requestCount < limit) {
            requestCount++;
            return "Req Allowed";
        } else {
            return "Rate limit Exceed";
        }

    }
}


const userLimiter = createRateLimiter(3, 5000);


console.log(userLimiter());
console.log(userLimiter());
console.log(userLimiter());
console.log(userLimiter());


setTimeout(() => {
    console.log(userLimiter())
}, 5000);