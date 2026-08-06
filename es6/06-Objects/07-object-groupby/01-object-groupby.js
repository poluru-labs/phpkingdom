const people = [
  { name: "Ann", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Cy", age: 20 },
];
const byAge = Object.groupBy(people, p => p.age);
document.getElementById("out").textContent = JSON.stringify(byAge, null, 2);
