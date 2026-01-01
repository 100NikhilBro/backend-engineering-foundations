// Result frequently available nhi hai | Sync-Asycn ka Problem hai | Clien wnat to check reapeatedly

// Status Checking - Jobs , payment 

async function poll(fn, interval, maxAttempts = 5) {
    let attempts = 0;

    while (attempts < maxAttempts) {
        const result = await fn();

        if (result === "DONE") {
            return result;
        }

        attempts++;
        await new Promise(res => setTimeout(res, interval));
    }

    throw new Error("Polling timeout");
}




poll(checkPaymentStatus, 2000)
    .then(res => console.log("Completed"))
    .catch(err => console.log(err.message));