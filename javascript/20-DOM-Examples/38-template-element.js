const people = [
  { name: "Ada", role: "Eng" },
  { name: "Lin", role: "Design" },
];
let i = 0;
document.getElementById("btn").onclick = () => {
  const person = people[i % people.length];
  i += 1;
  const node = document.getElementById("tpl").content.cloneNode(true);
  node.querySelector(".name").textContent = person.name;
  node.querySelector(".role").textContent = person.role;
  document.getElementById("list").appendChild(node);
};
