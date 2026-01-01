// PromiseChaining bolte hai jo apne ko callback Hell se bachati hai 

// .then --> return a new Promise 


async function fetchUser() {};

fetchUser()
    .then(user => fetchOrders(user.id))
    .then(orders => processOrders(orders))
    .catch(err => console.log(err));