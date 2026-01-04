// Promisification 
// it is the process of converting a callback-based 
// asynchronous function into a
// Promise-based one so 
// it can be used with async/await.



function sum(a, b, cb) {
    if (!a || !b) return cb("Invalid input");
    cb(null, a + b);
}




// Promisified verison 
function sumPromise(a, b) {
    return new Promise((resolve, reject) => {
        if (!a || !b) reject("Invalid input");
        else resolve(a + b);
    });
}



// ===============================================================


// Note -> nodejs mein already hota hai yeh

const util = require('util');
const readFilePromise = util.promisify(fs.readFile);


// Use kaise krte hai

const data = await readFilePromise("file.txt", "utf8");