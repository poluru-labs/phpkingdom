let from = null;
const list = document.getElementById("list");
list.addEventListener("dragstart", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  from = li;
  e.dataTransfer.effectAllowed = "move";
});
list.addEventListener("dragover", (e) => e.preventDefault());
list.addEventListener("drop", (e) => {
  e.preventDefault();
  const to = e.target.closest("li");
  if (!from || !to || from === to) return;
  list.insertBefore(from, to);
  document.getElementById("out").textContent = [...list.querySelectorAll("li")].map(li => li.textContent).join(" → ");
  from = null;
});
