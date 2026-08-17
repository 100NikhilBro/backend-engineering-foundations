// ============================================================
// Q12 — Active Users: Category-wise Total Order Amount
// ============================================================


// // // const users = [
// // //   {
// // //     name: "A",
// // //     active: true,
// // //     orders: [
// // //       { category: "mobile", amount: 20000 },
// // //       { category: "laptop", amount: 50000 }
// // //     ]
// // //   },
// // //   {
// // //     name: "B",
// // //     active: false,
// // //     orders: [
// // //       { category: "mobile", amount: 30000 }
// // //     ]
// // //   },
// // //   {
// // //     name: "C",
// // //     active: true,
// // //     orders: [
// // //       { category: "mobile", amount: 15000 },
// // //       { category: "mobile", amount: 10000 }
// // //     ]
// // //   }
// // // ];


// // // const activeUsers = users.filter((x)=> x.active===true);

// // // const allOrders = activeUsers.flatMap((x)=>x.orders);

// // // const ans = allOrders.reduce((acc,crr)=>{

// // //         if(!acc[crr.category]){
// // //             acc[crr.category] = crr.amount
// // //         }else{
// // //             acc[crr.category] += crr.amount;
// // //         }
// // //         return acc;
// // //     },{})

// // // console.log(ans);





// ============================================================
// Q13 — Department-wise Average Salary
// ============================================================


// // // const employees = [
// // //   { name: "A", department: "IT", salary: 60000 },
// // //   { name: "B", department: "HR", salary: 40000 },
// // //   { name: "C", department: "IT", salary: 80000 },
// // //   { name: "D", department: "HR", salary: 50000 },
// // //   { name: "E", department: "Sales", salary: 70000 },
// // //   { name: "F", department: "IT", salary: 70000 },
// // //   { name: "G", department: "Sales", salary: 50000 }
// // // ];


// // // const res = employees.reduce((acc,crr)=>{

// // //     if(!acc[crr.department]){
// // //         acc[crr.department] = {
// // //             "totalSalary" : crr.salary,
// // //             "total" : 1,
// // //             "avgSalary" : 0
// // //         }
// // //         }else{
// // //             acc[crr.department].totalSalary +=crr.salary;
// // //             acc[crr.department].total +=1;
// // //         }

// // //         acc[crr.department].avgSalary = (acc[crr.department].totalSalary/acc[crr.department].total*1.0)
// // //         return acc;
// // //     }
// // // ,{})


// // // console.log(res);





// ============================================================
// Q14 — Highest-paid Employee per Department
// ============================================================


// // // const employees = [
// // //   { name: "A", department: "IT", salary: 60000 },
// // //   { name: "B", department: "HR", salary: 40000 },
// // //   { name: "C", department: "IT", salary: 80000 },
// // //   { name: "D", department: "HR", salary: 50000 },
// // //   { name: "E", department: "Sales", salary: 70000 },
// // //   { name: "F", department: "IT", salary: 70000 },
// // //   { name: "G", department: "Sales", salary: 90000 }
// // // ];



// // // const res = employees.reduce((acc,crr)=>{

// // //     if (!acc[crr.department]) {
// // //     acc[crr.department] = {
// // //         name: crr.name,
// // //         salary: crr.salary
// // //     };
// // // } else if (crr.salary > acc[crr.department].salary) {
// // //     acc[crr.department] = {
// // //         name: crr.name,
// // //         salary: crr.salary
// // //     }
// // // }

// // //     return acc;
// // // },{})


// // // console.log(res);






// ============================================================
// Q15 — Highest-paid Employee per Department with Minimum Experience
// ============================================================


// // // const employees = [
// // //   { name: "A", department: "IT", salary: 60000, experience: 3 },
// // //   { name: "B", department: "IT", salary: 80000, experience: 5 },
// // //   { name: "C", department: "HR", salary: 50000, experience: 4 },
// // //   { name: "D", department: "HR", salary: 70000, experience: 6 },
// // //   { name: "E", department: "IT", salary: 90000, experience: 7 },
// // //   { name: "F", department: "HR", salary: 45000, experience: 2 },
// // //   { name: "G", department: "Sales", salary: 75000, experience: 5 }
// // // ];

// // // const res = employees.reduce((acc,crr)=>{

// // //     if (crr.experience < 5) {
// // //         return acc;
// // //     }

// // //     if(!acc[crr.department]){
// // //         acc[crr.department]={
// // //             name : crr.name,
// // //             salary : crr.salary,
// // //         }
// // //     }else if(crr.salary>acc[crr.department].salary){
// // //           acc[crr.department]={
// // //             name : crr.name,
// // //             salary : crr.salary,
// // //             experience : crr.experience
// // //         } 
// // //     }

// // //     return acc
// // // },{})


// // // console.log(res);






// ============================================================
// Q16 — Completed Orders: Total Amount and Average Rating per User
// ============================================================


// // // const orders = [
// // //   { user: "A", amount: 500, status: "completed", rating: 5 },
// // //   { user: "B", amount: 800, status: "completed", rating: 3 },
// // //   { user: "A", amount: 300, status: "cancelled", rating: 4 },
// // //   { user: "C", amount: 1000, status: "completed", rating: 5 },
// // //   { user: "B", amount: 200, status: "completed", rating: 4 },
// // //   { user: "A", amount: 700, status: "completed", rating: 2 },
// // //   { user: "C", amount: 400, status: "completed", rating: 4 }
// // // ];


// // // // without filter

// // // const res = orders.reduce((acc,crr)=>{

// // //     if(crr.status!=='completed'){
// // //         return acc;
// // //     }


// // //     if(!acc[crr.user]){
// // //         acc[crr.user]={
// // //             totalAmount : crr.amount,
// // //             totalrating : crr.rating,
// // //             total : 1,
// // //             avgRating : 0
// // //         }
// // //     }else{
// // //         acc[crr.user].totalAmount += crr.amount;
// // //         acc[crr.user].totalrating += crr.rating;
// // //         acc[crr.user].total +=1;
// // //     }

// // //     acc[crr.user].avgRating = (acc[crr.user].totalrating/acc[crr.user].total*1.0);


// // //     return acc;
// // // },{})


// // // console.log(res);




// // // // filter + reduce 

// // // const res = orders.filter((o)=>{return o.status==='completed'}).reduce((acc,crr)=>{



// // //     if(!acc[crr.user]){
// // //         acc[crr.user]={
// // //             totalAmount : crr.amount,
// // //             totalrating : crr.rating,
// // //             total : 1,
// // //             avgRating : 0
// // //         }
// // //     }else{
// // //         acc[crr.user].totalAmount += crr.amount;
// // //         acc[crr.user].totalrating += crr.rating;
// // //         acc[crr.user].total +=1;
// // //     }

// // //     acc[crr.user].avgRating = (acc[crr.user].totalrating/acc[crr.user].total*1.0);


// // //     return acc;
// // // },{})




// // // console.log(res);



// ============================================================
// Q17 — Top 2 Products by Total Sales
// ============================================================


// // // const sales = [
// // //   { product: "A", quantity: 5, price: 100 },
// // //   { product: "B", quantity: 2, price: 500 },
// // //   { product: "A", quantity: 3, price: 100 },
// // //   { product: "C", quantity: 10, price: 50 },
// // //   { product: "B", quantity: 1, price: 500 },
// // //   { product: "D", quantity: 4, price: 200 }
// // // ];

// // // const totals = sales.reduce((acc, curr) => {

// // //     if (!acc[curr.product]) {
// // //         acc[curr.product] = curr.quantity * curr.price;
// // //     } else {
// // //         acc[curr.product] += curr.quantity * curr.price;
// // //     }

// // //     return acc;

// // // }, {});

// // // const result = Object.entries(totals)
// // //     .map(([product, totalSales]) => ({
// // //         product,
// // //         totalSales
// // //     }))
// // //     .sort((a, b) => b.totalSales - a.totalSales)
// // //     .slice(0, 2);

// // // console.log(result);






// ============================================================
// Q18 — Successful Transactions: User Balance Filter
// ============================================================


// // // const transactions = [
// // //   { user: "A", type: "credit", amount: 1000, status: "success" },
// // //   { user: "A", type: "debit", amount: 300, status: "success" },
// // //   { user: "B", type: "credit", amount: 2000, status: "success" },
// // //   { user: "A", type: "debit", amount: 200, status: "failed" },
// // //   { user: "B", type: "debit", amount: 500, status: "success" },
// // //   { user: "C", type: "credit", amount: 1500, status: "success" },
// // //   { user: "C", type: "debit", amount: 400, status: "success" },
// // //   { user: "B", type: "credit", amount: 500, status: "failed" }
// // // ];

// // // const result = transactions
// // //     .filter(x => x.status === "success")
// // //     .reduce((acc, curr) => {

// // //         if (!acc[curr.user]) {
// // //             acc[curr.user] = {
// // //                 totalCredit: 0,
// // //                 totalDebit: 0,
// // //                 balance: 0
// // //             };
// // //         }

// // //         if (curr.type === "credit") {
// // //             acc[curr.user].totalCredit += curr.amount;
// // //         } else {
// // //             acc[curr.user].totalDebit += curr.amount;
// // //         }

// // //         acc[curr.user].balance =
// // //             acc[curr.user].totalCredit -
// // //             acc[curr.user].totalDebit;

// // //         return acc;

// // //     }, {});

// // // const finalResult = Object.fromEntries(
// // //     Object.entries(result)
// // //         .filter(([user, data]) => data.balance >= 1000)
// // // );

// // // console.log(finalResult);






// ============================================================
// Q19 — Active Teams: Total Score, Average Score and Top Player
// ============================================================


// // // const teams = [
// // //   {
// // //     name: "Team A",
// // //     active: true,
// // //     players: [
// // //       { name: "P1", score: 80 },
// // //       { name: "P2", score: 60 },
// // //       { name: "P3", score: 90 }
// // //     ]
// // //   },
// // //   {
// // //     name: "Team B",
// // //     active: false,
// // //     players: [
// // //       { name: "P4", score: 100 },
// // //       { name: "P5", score: 70 }
// // //     ]
// // //   },
// // //   {
// // //     name: "Team C",
// // //     active: true,
// // //     players: [
// // //       { name: "P6", score: 75 },
// // //       { name: "P7", score: 85 },
// // //       { name: "P8", score: 95 }
// // //     ]
// // //   }
// // // ];

// // // const result = teams
// // //   .filter(team => team.active)
// // //   .map(team => {

// // //     const totalScore = team.players.reduce(
// // //       (acc, player) => acc + player.score,
// // //       0
// // //     );

// // //     const topPlayer = team.players.reduce((top, player) =>
// // //       player.score > top.score ? player : top
// // //     );

// // //     return {
// // //       name: team.name,
// // //       totalScore,
// // //       averageScore: totalScore / team.players.length,
// // //       topPlayer: topPlayer.name
// // //     };
// // //   })
// // //   .reduce((acc, team) => {

// // //     acc[team.name] = {
// // //       totalScore: team.totalScore,
// // //       averageScore: Number(team.averageScore.toFixed(2)),
// // //       topPlayer: team.topPlayer
// // //     };

// // //     return acc;

// // //   }, {});

// // // console.log(result);






// ============================================================
// Q20 — In-stock Products: Category-wise Top Product and Average Price
// ============================================================


// // // const products = [
// // //   { name: "A", category: "mobile", price: 20000, rating: 4.5, stock: 10 },
// // //   { name: "B", category: "mobile", price: 30000, rating: 4.2, stock: 0 },
// // //   { name: "C", category: "laptop", price: 60000, rating: 4.8, stock: 5 },
// // //   { name: "D", category: "laptop", price: 50000, rating: 4.3, stock: 8 },
// // //   { name: "E", category: "mobile", price: 25000, rating: 4.7, stock: 3 },
// // //   { name: "F", category: "laptop", price: 70000, rating: 4.9, stock: 0 },
// // //   { name: "G", category: "tablet", price: 15000, rating: 4.6, stock: 6 }
// // // ];



// // // const result = products
// // //   .filter(product => product.stock > 0)
// // //   .reduce((acc, curr) => {

// // //     if (!acc[curr.category]) {
// // //       acc[curr.category] = {
// // //         topProduct: curr.name,
// // //         topRating: curr.rating,
// // //         totalPrice: curr.price,
// // //         totalProducts: 1
// // //       };
// // //     } else {

// // //       if (curr.rating > acc[curr.category].topRating) {
// // //         acc[curr.category].topProduct = curr.name;
// // //         acc[curr.category].topRating = curr.rating;
// // //       }

// // //       acc[curr.category].totalPrice += curr.price;
// // //       acc[curr.category].totalProducts += 1;
// // //     }

// // //     return acc;

// // //   }, {});

// // // Object.keys(result).forEach(category => {
// // //   result[category].averagePrice =
// // //     result[category].totalPrice /
// // //     result[category].totalProducts;

// // //   delete result[category].topRating;
// // //   delete result[category].totalPrice;
// // // });

// // // console.log(result);






