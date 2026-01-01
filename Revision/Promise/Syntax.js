const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Success');
    } else {
        reject('Error')
    }
})

promise.then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always Run");
    })