const orders = [
  { user: "A", amount: 500, status: "completed", date: "2026-08-05" },
  { user: "B", amount: 800, status: "pending",   date: "2026-08-10" },
  { user: "A", amount: 300, status: "completed", date: "2026-07-25" },
  { user: "C", amount: 1000, status: "completed", date: "2026-08-15" },
  { user: "B", amount: 200, status: "completed", date: "2026-08-20" },
  { user: "C", amount: 400, status: "cancelled", date: "2026-08-18" }
];


const today = new Date("2026-08-22");


const monthOrders = orders.filter((o)=>{
    
    const OrderDate = new Date(o.date);

    return (
        OrderDate.getFullYear()===today.getFullYear() &&
        OrderDate.getMonth()===today.getMonth() &&
        o.status==='completed'
    )
})

const res = monthOrders.reduce((acc,crr)=>{
    return acc+crr.amount;
},0)

console.log(res);