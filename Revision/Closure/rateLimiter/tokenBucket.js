function createTokenBucket(capacity, refillRate) {
    let tokens = capacity;
    let lastRefill = Date.now();

    return function() {

        const now = Date.now();
        const elapsed = (now - lastRefill) / 1000;

        tokens = Math.min(capacity, tokens + elapsed * refillRate);
        lastRefill = now;

        if (tokens >= 1) {
            tokens -= 1;
            return "Request allowed";
        } else {
            return "Rate limit exceeded";
        }
    };
}