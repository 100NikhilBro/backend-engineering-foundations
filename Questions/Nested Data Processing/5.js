const teams = [
  {
    name: "Frontend",
    members: [
      {
        name: "A",
        active: true,
        experience: 4,
        skills: ["JavaScript", "React"]
      },
      {
        name: "B",
        active: false,
        experience: 5,
        skills: ["JavaScript", "Node.js"]
      },
      {
        name: "C",
        active: true,
        experience: 2,
        skills: ["JavaScript", "CSS"]
      }
    ]
  },
  {
    name: "Backend",
    members: [
      {
        name: "D",
        active: true,
        experience: 5,
        skills: ["Node.js", "JavaScript"]
      },
      {
        name: "E",
        active: true,
        experience: 4,
        skills: ["Python", "Django"]
      }
    ]
  },
  {
    name: "DevOps",
    members: [
      {
        name: "F",
        active: true,
        experience: 6,
        skills: ["Docker", "Kubernetes"]
      }
    ]
  }
];



const res = teams
  .flatMap((t) => t.members)
  .filter((x) => {
    return (
      x.active === true &&
      x.experience >= 3 &&
      x.skills.some((skill) =>
        skill.toLowerCase() === "javascript"
      )
    );
  })
  .map((x) => x.name);

console.log(res);