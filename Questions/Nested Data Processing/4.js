const teams = [
  {
    name: "Frontend",
    members: [
      { name: "A", salary: 50000, active: true, experience: 4 },
      { name: "B", salary: 60000, active: false, experience: 5 },
      { name: "C", salary: 70000, active: true, experience: 2 }
    ]
  },
  {
    name: "Backend",
    members: [
      { name: "D", salary: 80000, active: true, experience: 5 },
      { name: "E", salary: 90000, active: true, experience: 2 }
    ]
  },
  {
    name: "DevOps",
    members: [
      { name: "F", salary: 75000, active: true, experience: 4 }
    ]
  }
];



const res = teams.reduce((acc, crr) => {
    
    acc[crr.name] = crr.members
        .filter(m => m.experience >= 3)
        .reduce((acc, crr) => {
            return acc + crr.salary;
        }, 0);

    return acc;

}, {});


console.log(res);