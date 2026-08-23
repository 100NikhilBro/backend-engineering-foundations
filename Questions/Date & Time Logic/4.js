const subscriptions = [
  { user: "A", startDate: "2026-08-01" },
  { user: "B", startDate: "2026-07-20" },
  { user: "C", startDate: "2026-08-15" },
  { user: "D", startDate: "2026-07-22" },
  { user: "E", startDate: "2026-06-20" }
];

const today = new Date("2026-08-22");

const res = subscriptions.filter((s)=>{
    
    const subscrptiondDate = new Date(s.startDate);

    const diff = today.getTime() - subscrptiondDate.getTime();

    const days = diff/(1000*60*60*24);

    return (
        days>=0 && days <= 29
    )
}).map((s)=>s.user)


console.log(res);