//[1, 2, 2, 3, 1] → [1, 2, 3]


Array.prototype.uniqueValues = function() {

    const seen = new Set();

    return this.filter(item => {
        if (seen.has(item)) return false;
        seen.add(item);
        return true;
    })

}