const teams = [
  {
    name: "Frontend",
    members: [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: true }
    ]
  },
  {
    name: "Backend",
    members: [
      { name: "D", active: true },
      { name: "E", active: false }
    ]
  },
  {
    name: "DevOps",
    members: [
      { name: "F", active: true }
    ]
  }
];


const res = teams.flatMap((t)=>t.members).filter((m)=>{
    return m.active===true;
}).map((x)=>x.name);

console.log(res);