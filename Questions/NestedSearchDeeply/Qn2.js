// Recursive Nested Search — Q2


const data = [
  {
    name: "Frontend",
    children: [
      {
        name: "React",
        children: [
          { name: "Hooks" },
          { name: "Components" }
        ]
      }
    ]
  },
  {
    name: "Backend",
    children: [
      {
        name: "Node.js",
        children: [
          { name: "Express" },
          { name: "MongoDB" }
        ]
      }
    ]
  }
];

const keyword = "o";



function findMatchingNames(data, keyword, result = []) {

    for (const item of data) {

        // Current object check
        if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
            result.push(item.name);
        }

        // Recursively search children
        if (item.children) {
            findMatchingNames(item.children, keyword, result);
        }
    }

    return result;
}


const result = findMatchingNames(data, "o");

console.log(result);