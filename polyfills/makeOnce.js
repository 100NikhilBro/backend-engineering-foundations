function makeOnce(fn) {
    let run = 0;
    return function(...args) {
        if (run >= 1) {
            console.log("Limit Reached");
            return
        }
        run++;
        return fn.apply(this, ...args);
    }
}


function myFn() {
    console.log("Run Once");
}

const res = makeOnce(myFn);
res();
res();
res();