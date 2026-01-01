// Api slow hai | Client Wait nhi kr paa rha to ek time limit ke baad fail kro

// Slow Apis - use krte hai 


function withTimeout(promise, timeout) {
    const timer = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), timeout)
    );

    return Promise.race([promise, timer]);
}



withTimeout(fetch("https://api.example.com"), 3000)
    .then(res => console.log("Response received"))
    .catch(err => console.log(err.message));