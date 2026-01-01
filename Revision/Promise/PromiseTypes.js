// 1. Promise.all
// Agr saare resolve to resolve if ek bhi reject to reject

// When we make parallel Api Calls we use that - Parallel API calls 

Promise.all([
        fetchUser(),
        fetchOrders(),
        fetchPayments()
    ])
    .then(([user, orders, payments]) => {
        console.log(user, orders, payments);
    });



// 2. Promise.allSettled
// Never rejected
// it returns the result of every Promise

// jb bhi apne ko sbka result chaiye we use that - Sabka result chahiye (success/failure dono)

Promise.allSettled([
    p1,
    p2,
    p3
]);



// 3. Promise.race

// yeh bolta hai ki jp bhi pehle settle ho jaye like - Jo pehle settle hua (resolve/reject) → wahi result

// jb baat timeOutLogic yaa fastResponse ki ho use Kro  

Promise.race([
    slowAPI(),
    fastAPI()
]);



// 4. Promise.any

// isme sirf ek promise win hota hai - woh jo pehle full filled hoga baki sb aggregate Error denge




Promise.any([
    api1(),
    api2(),
    api3()
]);