// Agr apne ko aisa feel aa rha hai ki is particulr Req pr ek se jyada baar try krna hai even if it fails

// API, DB, Payments - Commonly used 

// Basic Retry 

async function retry(fn, retries = 3, delay = 1000) {
    try {
        return await fn();
    } catch (err) {
        if (retries === 0) throw err;

        await new Promise(res => setTimeout(res, delay));
        return retry(fn, retries - 1, delay);
    }
}



// Usage

retry(() => fetch("https://api.example.com"))
    .then(res => console.log("Success"))
    .catch(err => console.log("Failed after retries"));