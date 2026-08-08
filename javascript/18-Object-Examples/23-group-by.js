function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    (acc[k] ||= []).push(item);
    return acc;
  }, {});
}
const people = [
  { name: "Ada", role: "dev" },
  { name: "Lin", role: "design" },
  { name: "Sam", role: "dev" }
];
document.getElementById("out").textContent = JSON.stringify(groupBy(people, "role"), null, 2);
