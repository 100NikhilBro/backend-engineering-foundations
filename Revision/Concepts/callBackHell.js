// callBack hell jb hota hai jb hum multiple asyn operations ko handle krne ke liye 
//  callback ke andar calback likhte hai 
// due to which code become hard to read and debug





// CallBackHell 

getUser(userId, function(user) {
    getOrders(user.id, function(orders) {
        getPayment(orders[0].id, function(payment) {
            sendInvoice(payment, function(response) {
                console.log("Invoice Sent");
            })
        })
    })
})



// Promise - CallBack hell se bachna hai to 

getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getPayment(orders[0].id))
    .then(payment => sendInvoice(payment))
    .then(() => console.log("Invoice sent"))
    .catch(err => console.log(err));



//   Clean Promise - async await - Industry Standard


try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const payment = await getPayment(orders[0].id);
    await sendInvoice(payment);
    console.log("Invoice sent");
} catch (err) {
    console.log(err);
}