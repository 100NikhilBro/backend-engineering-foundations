// .map((val,idx,arr)=>{})

Array.prototype.MyMap = function(cb) {
    let res = [];
    for (let i = 0; i <= this.length - 1; i++) {
        res.push(cb(this[i], i, this));
    }
    return res;
}

let arr = [1, 2, 3, 4, 5];

const newArr = arr.MyMap((val, idx, arr) => {
    return val * 2;
})

console.log(newArr);