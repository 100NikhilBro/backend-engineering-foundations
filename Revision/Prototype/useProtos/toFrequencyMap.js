// ["a", "b", "a", "c", "b", "a"]
// → { a: 3, b: 2, c: 1 }


Array.prototype.toFrequencyMap = function() {
    const freq = {};

    this.forEach(item => {
        freq[item] = (freq[item] || 0) + 1;
    })

    return freq;
}