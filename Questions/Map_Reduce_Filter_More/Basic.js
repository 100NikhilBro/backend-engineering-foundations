// ============================================================
// Q1 — Count Frequency of Each Age
// ============================================================

// // // // // // // const people = [
// // // // // // //   { name: "A", age: 20 },
// // // // // // //   { name: "B", age: 21 },
// // // // // // //   { name: "C", age: 20 },
// // // // // // //   { name: "D", age: 22 },
// // // // // // //   { name: "E", age: 21 },
// // // // // // //   { name: "F", age: 20 }
// // // // // // // ];



// // // // // // // const result = {};


// // // // // // // people.map((x)=>{
// // // // // // //     if(result[x.age]){
// // // // // // //         result[x.age]++;
// // // // // // //     }else{
// // // // // // //         result[x.age] = 1;
// // // // // // //     }
// // // // // // // })



// // // // // // // console.log(result);




// ============================================================
// Q2 — Get Unique Ages
// ============================================================


// // // // // // const users = [
// // // // // //   { name: "A", age: 20 },
// // // // // //   { name: "B", age: 25 },
// // // // // //   { name: "C", age: 30 },
// // // // // //   { name: "D", age: 22 }
// // // // // // ];


// // // // // // const res = [];



// // // // // // users.map((x)=>{
// // // // // //     if(!res[x.age]){
// // // // // //         res.push(x.age); 
// // // // // //     }
// // // // // // })


// // // // // // console.log(res);




// ============================================================
// Q3 — Active Adult Users: Get Their Ages
// ============================================================


// // // // // // const users = [
// // // // // //   { name: "A", age: 17, active: true },
// // // // // //   { name: "B", age: 22, active: true },
// // // // // //   { name: "C", age: 25, active: false },
// // // // // //   { name: "D", age: 30, active: true },
// // // // // //   { name: "E", age: 16, active: true }
// // // // // // ];



// // // // // // const res = [];


// // // // // // // users.map((x)=>{
// // // // // // //     if(x.active && x.age>=18){
// // // // // // //         res.push(x.age);
// // // // // // //     }
// // // // // // // })


// // // // // // // console.log(res);



// // // // // // users.filter((x)=>{return x.active && x.age>=18}).map((x)=>{res.push(x.age)})
// // // // // // console.log(res);




// ============================================================
// Q4 — Total Amount of Completed Orders
// ============================================================


// // // // // const orders = [
// // // // //   { id: 1, amount: 500, status: "completed" },
// // // // //   { id: 2, amount: 800, status: "pending" },
// // // // //   { id: 3, amount: 1200, status: "completed" },
// // // // //   { id: 4, amount: 300, status: "cancelled" },
// // // // //   { id: 5, amount: 700, status: "completed" }
// // // // // ];



// // // // // const res = orders.filter((x)=>{return x.status==='completed'}).reduce((acc,curr)=>{return curr.amount+acc},0);


// // // // // console.log(res);




// ============================================================
// Q5 — Average Salary of Active Adult Users
// ============================================================


// // // // // const users = [
// // // // //   { name: "A", age: 17, salary: 20000, active: true },
// // // // //   { name: "B", age: 25, salary: 50000, active: true },
// // // // //   { name: "C", age: 30, salary: 70000, active: false },
// // // // //   { name: "D", age: 28, salary: 60000, active: true },
// // // // //   { name: "E", age: 19, salary: 30000, active: true }
// // // // // ];



// // // // // const res = [];


// // // // // users.filter((u)=>{return u.active && u.age>=18}).map((x)=>res.push(x.salary));


// // // // // const ans = res.reduce((acc,curr)=>{
// // // // //     return curr+acc;
// // // // // },0);


// // // // // console.log(res);


// // // // // console.log(ans);


// // // // // const finalAns = ans/res.length*1.0;


// // // // // console.log(finalAns);




// ============================================================
// Q6 — Category-wise Total Product Price
// ============================================================


// // // // // const products = [
// // // // //   { name: "A", category: "mobile", price: 20000 },
// // // // //   { name: "B", category: "laptop", price: 50000 },
// // // // //   { name: "C", category: "mobile", price: 30000 },
// // // // //   { name: "D", category: "tablet", price: 15000 },
// // // // //   { name: "E", category: "laptop", price: 70000 },
// // // // //   { name: "F", category: "mobile", price: 25000 }
// // // // // ];



// // // // // const res = products.reduce((acc,crr)=>{


// // // // // //     if(acc[crr.category]){
// // // // // //         acc[crr.category] = acc[crr.category]+crr.price;
// // // // //     }else{
// // // // //         acc[crr.category] = crr.price
// // // // //     }


// // // // // //     return acc;


// // // // // // },{});



// // // // // // console.log(res);




// ============================================================
// Q7 — Count Users by Age
// ============================================================


// // // // // const users = [
// // // // //   { name: "A", age: 20 },
// // // // //   { name: "B", age: 21 },
// // // // //   { name: "C", age: 20 },
// // // // //   { name: "D", age: 22 },
// // // // //   { name: "E", age: 21 },
// // // // //   { name: "F", age: 20 }
// // // // // ];





// // // // // const res = users.reduce((acc,crr)=>{


// // // // //     if(!acc[crr.age]){
// // // // //         acc[crr.age] = 1;
// // // // //     }else{
// // // // //         acc[crr.age] = acc[crr.age]+1;
// // // // //     }


// // // // //     return acc;


// // // // // },{})


// // // // // console.log(res);



// // // // // const mp = {};


// // // // // users.map((x)=>{
// // // // //     if(!mp[x.age]){
// // // // //         mp[x.age]=1;
// // // // //     }else{
// // // // //         mp[x.age]=mp[x.age]+1;
// // // // //     }
// // // // // })



// // // // // console.log(mp);




// ============================================================
// Q8 — User-wise Total Order Amount
// ============================================================


// // // // const orders = [
// // // //   { user: "A", amount: 500 },
// // // //   { user: "B", amount: 800 },
// // // //   { user: "A", amount: 300 },
// // // //   { user: "C", amount: 1000 },
// // // //   { user: "B", amount: 200 }
// // // // ];




// // // // const res = orders.reduce((acc,crr)=>{


// // // //     if(!acc[crr.user]){
// // // //         acc[crr.user] = crr.amount;
// // // //     }else{
// // // //         acc[crr.user] = acc[crr.user] + crr.amount;
// // // //     }


// // // //     return acc;


// // // // },{})


// // // // console.log(res);




// ============================================================
// Q9 — Completed Online Orders: User-wise Total Amount
// ============================================================


// // // // const orders = [
// // // //   { user: "A", amount: 500, status: "completed", type: "online" },
// // // //   { user: "B", amount: 800, status: "pending", type: "online" },
// // // //   { user: "A", amount: 300, status: "completed", type: "offline" },
// // // //   { user: "C", amount: 1000, status: "completed", type: "online" },
// // // //   { user: "B", amount: 200, status: "completed", type: "online" },
// // // //   { user: "A", amount: 400, status: "completed", type: "online" },
// // // //   { user: "C", amount: 600, status: "cancelled", type: "online" }
// // // // ];



// // // // const res = orders.filter((x)=>{return x.status==='completed' && x.type==="online"})
// // // // .reduce((acc,crr)=>{


// // // //     if(!acc[crr.user]){
// // // //         acc[crr.user]=crr.amount;
// // // //     }else{
// // // //         acc[crr.user]=acc[crr.user]+crr.amount;
// // // //     }


// // // //     return acc;
// // // // },{})



// // // // console.log(res);




// ============================================================
// Q10 — Completed Orders: User-wise Total Amount and Order Count
// ============================================================


// // // const orders = [
// // //   { user: "A", amount: 500, status: "completed" },
// // //   { user: "B", amount: 800, status: "completed" },
// // //   { user: "A", amount: 300, status: "completed" },
// // //   { user: "B", amount: 200, status: "cancelled" },
// // //   { user: "C", amount: 1000, status: "completed" },
// // //   { user: "A", amount: 400, status: "cancelled" },
// // //   { user: "C", amount: 500, status: "completed" }
// // // ];


// // // const filteredOrders = orders.filter((o)=>{return o.status==='completed'});


// // // console.log(filteredOrders)



// // // const res = filteredOrders.reduce((acc,crr)=>{


// // //     if(!acc[crr.user]){
// // //         acc[crr.user] = {
// // //             totalAmt : crr.amount,
// // //             totalorders : 1
// // //         }
// // //     }else{
// // //          acc[crr.user].totalAmt += crr.amount
// // //          acc[crr.user].totalorders += 1
        
// // //     }


// // //     return acc;
// // // },{})



// // // console.log(res);





// ============================================================
// Q11 — User-wise Credit, Debit and Balance
// ============================================================


// // const transactions = [
// //   { user: "A", type: "credit", amount: 500 },
// //   { user: "A", type: "debit", amount: 200 },
// //   { user: "B", type: "credit", amount: 1000 },
// //   { user: "A", type: "credit", amount: 300 },
// //   { user: "B", type: "debit", amount: 400 },
// //   { user: "C", type: "credit", amount: 700 },
// //   { user: "C", type: "debit", amount: 200 }
// // ];



// // const res = transactions.reduce((acc,crr)=>{


// //     if(!acc[crr.user]){
// //         acc[crr.user]={
// //             totalCredit : crr.type === 'credit' ? crr.amount : 0,
// //             totalDebit  : crr.type === 'debit' ? crr.amount : 0,
// //             balance : 0
// //         }
// //     }else{
// //         acc[crr.user].totalCredit += crr.type === 'credit' ? crr.amount : 0;
// //         acc[crr.user].totalDebit  += crr.type === 'debit' ? crr.amount : 0;
// //     }


// //     acc[crr.user].balance = acc[crr.user].totalCredit - acc[crr.user].totalDebit;


// //     return acc;
// // },{})


// // console.log(res);




// ============================================================
// Q12 — User-wise Category-wise Total Order Amount
// ============================================================


// const orders = [
//   { user: "A", category: "mobile", amount: 20000 },
//   { user: "A", category: "laptop", amount: 50000 },
//   { user: "B", category: "mobile", amount: 15000 },
//   { user: "A", category: "mobile", amount: 10000 },
//   { user: "B", category: "laptop", amount: 60000 },
//   { user: "C", category: "mobile", amount: 25000 },
//   { user: "B", category: "mobile", amount: 5000 }
// ];



// const res =  orders.reduce((acc,crr)=>{


//     if(!acc[crr.user]){
//         acc[crr.user]={}
//     }


//     if(!acc[crr.user][crr.category]){
//         acc[crr.user][crr.category] = crr.amount;
//     }else{
//         acc[crr.user][crr.category]+=crr.amount;
//     }


//     return acc;
// },{});



// console.log(res);