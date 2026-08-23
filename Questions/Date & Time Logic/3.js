const orders = [
  { user: "A", amount: 500, status: "completed", date: "2026-08-22" },
  { user: "B", amount: 800, status: "completed", date: "2026-08-20" },
  { user: "A", amount: 300, status: "completed", date: "2026-08-15" },
  { user: "B", amount: 400, status: "pending",   date: "2026-08-10" },
  { user: "A", amount: 700, status: "completed", date: "2026-07-25" },
  { user: "C", amount: 1000, status: "completed", date: "2026-07-30" },
  { user: "B", amount: 200, status: "completed", date: "2026-07-20" }
];

const today = new Date("2026-08-22");

const res = orders.filter((o)=>{

    const orderDate = new Date(o.date);

    const diff = today.getTime() - orderDate.getTime();

    const days = diff/(1000 * 60 * 60 * 24);

    return (
        days>=0 && days<=29
        && o.status === 'completed'
    )
}).reduce((acc,crr)=>{
    if(!acc[crr.user]){
        acc[crr.user] = crr.amount;
    }else{
        acc[crr.user] += crr.amount;
    }
    return acc;
},{})


console.log(res);



