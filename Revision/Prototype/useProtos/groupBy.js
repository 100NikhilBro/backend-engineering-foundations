Array.prototype.groupBy = function(keyFn) {
    const res = {};

    this.forEach(item => {
        const key = keyFn(item);

        if (!res[key]) {
            res[key] = [];
        }

        res[key].push(item);
    })

    return res;
}



const users = [
    { name: "A", role: "admin" },
    { name: "B", role: "user" },
    { name: "C", role: "admin" }
];

console.log(users.groupBy(u => u.role));