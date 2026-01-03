// Throttle - Performance Control
// Throttle is says that event kitni baar bhi call yaa trigger ho
// Mein apne fixed interval mein hi chalunga like that 
// like baaki sb ignore 

// scrollEvent & ButtonSpamProtection - mein commonly used dekha hoga

// Basic Implmentation

function throttle(fn, limit) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();

        if (now - lastCall >= limit) {
            lastCall = now;
            fn(...args);
        }
    }
}