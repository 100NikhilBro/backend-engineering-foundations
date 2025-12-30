function getDiscount(price, discount) {
    discount = discount || 0.1; // 10% discount - hr disocunt nhi hai to bhi lga dega 

    discount = discount ? ? 0.1; // Nullish coalesing ise 0 ko 0 he lega 0.1 ka dsoiun nhi lgaga

    return price - price * discount;
}

console.log(getDiscount(100, 0)); // discount 0 pass kiya to ise yeh falsy value samjhgega aur dikkat create kr dega