console.log("Global Execution Context starts");
var globalVariable = "I am a global varibale";

function globalFunction() {
    console.log("Inside global function")
}

console.log(globalVariable);
globalFunction();

console.log("Global Execution Context ends");