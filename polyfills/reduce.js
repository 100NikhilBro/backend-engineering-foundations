// .reduce((acc,curr,idx,arr)=>{},initialValue)


Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    for (let i = 0; i <= this.length - 1; i++) {
        if (acc) {
            acc = cb(acc, this[i], i, this);
        } else {
            acc = this[i];
        }
    }
    return acc;
}

let arr = [1, 2, 3, 4, 5, 6];

const sum = arr.myReduce((acc, crr) => {
    return crr * acc;
}, 0)

console.log(sum);