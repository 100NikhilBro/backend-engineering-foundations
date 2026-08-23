const teams = [
  {
    name: "Frontend",
    members: [
      { name: "A", salary: 50000 },
      { name: "B", salary: 60000 },
      { name: "C", salary: 70000 }
    ]
  },
  {
    name: "Backend",
    members: [
      { name: "D", salary: 80000 },
      { name: "E", salary: 90000 }
    ]
  },
  {
    name: "DevOps",
    members: [
      { name: "F", salary: 75000 }
    ]
  }
];


const result = teams.reduce((acc, team) => {

    acc[team.name] = team.members.reduce((sum, member) => {
        return sum + member.salary;
    }, 0);

    return acc;

}, {});

console.log(result);