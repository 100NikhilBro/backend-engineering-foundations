const orders = [
  { user: "A", amount: 500, status: "completed", date: "2026-08-22" },
  { user: "B", amount: 800, status: "completed", date: "2026-08-20" },
  { user: "C", amount: 300, status: "pending",   date: "2026-08-19" },
  { user: "D", amount: 700, status: "completed", date: "2026-08-16" },
  { user: "E", amount: 400, status: "completed", date: "2026-08-15" },
  { user: "F", amount: 900, status: "completed", date: "2026-08-10" }
];

const today = new Date("2026-08-22");



const res = orders.filter((o)=>{

    const orderDate = new Date(o.date);

    const diff = today.getTime() - orderDate.getTime();

    const days = diff / (1000*60*60*24);

    return (
    days>=0 && days <= 6 &&
    o.status === 'completed'
    )
}).reduce((acc,crr)=>{
    return acc+crr.amount;
},0)

console.log(res);