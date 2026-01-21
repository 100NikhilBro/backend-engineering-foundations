// .filter((val,idx,arr)=>{}) 


Array.prototype.myFilter = function(cb) {

    let res = [];

    for (let i = 0; i <= this.length - 1; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }

    return res;
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.myFilter((val, idx, arr) => {
    return val % 2 !== 0;
})

console.log(newArr);