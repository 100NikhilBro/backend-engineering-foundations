const teams = [
  {
    name: "Frontend",
    members: [
      { name: "A", skills: ["JavaScript", "React"] },
      { name: "B", skills: ["HTML", "CSS"] }
    ]
  },
  {
    name: "Backend",
    members: [
      { name: "C", skills: ["Node.js", "MongoDB"] },
      { name: "D", skills: ["Python", "Django"] }
    ]
  }
];

const keyword = "MongoDB";



const members = teams.flatMap((team) => team.members);  // First We Flat it

const result = members.some((member) =>   // then use some 
  member.skills.some((skill) =>          // then again use some 
    skill.toLowerCase() === keyword.toLowerCase()
  )
);

console.log(result);

