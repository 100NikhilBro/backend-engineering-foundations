const normalizeInput = (input) => {

    const res = input.trim();

    const fin = res.split(' ').filter(Boolean).map(word => {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');

    return fin;
};

module.exports = { normalizeInput };

// Array -> String --> .join(' ');