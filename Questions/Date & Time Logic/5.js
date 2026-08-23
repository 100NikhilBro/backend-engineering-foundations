const logins = [
  { user: "A", date: "2026-08-01" },
  { user: "A", date: "2026-08-01" },
  { user: "A", date: "2026-08-05" },

  { user: "B", date: "2026-08-03" },
  { user: "B", date: "2026-08-10" },
  { user: "B", date: "2026-07-20" },

  { user: "C", date: "2026-08-15" },
  { user: "C", date: "2026-08-15" },
  { user: "C", date: "2026-08-20" },

  { user: "D", date: "2026-07-25" }
];

const today = new Date("2026-08-22");
const res = logins
  .filter((l) => {
    const date = new Date(l.date);

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth()
    );
  })
  .reduce((acc, curr) => {
    if (!acc[curr.user]) {
      acc[curr.user] = new Set();
    }

    acc[curr.user].add(curr.date);

    return acc;
  }, {});

const finalResult = Object.fromEntries(
  Object.entries(res).map(([user, dates]) => [
    user,
    dates.size
  ])
);

console.log(finalResult);