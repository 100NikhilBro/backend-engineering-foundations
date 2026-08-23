// Recursive Q1 — Keyword Search in Deeply Nested Data

const data = [
  {
    name: "Frontend",
    children: [
      {
        name: "React",
        children: [
          {
            name: "Hooks",
            children: [
              {
                name: "useMemo"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Backend",
    children: [
      {
        name: "Node.js"
      }
    ]
  }
];

const keyword = "useMemo";



function containsKeyword(data, keyword) {

    for (const item of data) {

        if (item.name.toLowerCase() === keyword.toLowerCase()) {
            return true;
        }

        if (item.children) {
            if (containsKeyword(item.children, keyword)) {
                return true;
            }
        }
    }

    return false;
}



console.log(containsKeyword(data, "useMemo"));
// true

console.log(containsKeyword(data, "MongoDB"));
// false