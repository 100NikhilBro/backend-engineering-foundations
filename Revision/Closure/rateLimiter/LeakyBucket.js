function createLeakyBucket(capacity, leakRate) {

    let queue = 0;

    setInterval(() => {
        if (queue > 0) queue--;
    }, 1000 / leakRate);

    return function() {
        if (queue < capacity) {
            queue++;
            return "Request queued";
        } else {
            return "Rate limit exceeded";
        }
    };
}