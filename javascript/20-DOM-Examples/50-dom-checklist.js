const tips = [
  "Prefer querySelector / querySelectorAll",
  "Use textContent for untrusted text",
  "classList for CSS classes",
  "addEventListener + delegation for lists",
  "preventDefault for forms/links when needed",
  "DocumentFragment / replaceChildren for batch updates",
];
const list = document.getElementById("list");
tips.forEach((t) => {
  const li = document.createElement("li");
  li.textContent = t;
  list.appendChild(li);
});
document.getElementById("out").textContent = tips.length + " habits listed";
