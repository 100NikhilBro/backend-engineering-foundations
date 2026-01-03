// Remember it - also clean the interval

const id = setInterval(() => {
    console.log("Event")
}, 3000);

clearInterval(id);