const arr = ["Delhi", "Mumbai", "Kanpur"];

Array.prototype.convertArraytoObject = function() {
    const newObj = {};

    this.forEach(element => {
        newObj[element] = element;
    })

    return newObj;
}

console.log(arr.convertArraytoObject());