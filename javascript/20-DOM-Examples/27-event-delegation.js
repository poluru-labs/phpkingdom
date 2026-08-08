const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li || !list.contains(li)) return;
  document.getElementById("out").textContent = "clicked id=" + li.dataset.id + " text=" + li.textContent;
});
let n = 3;
document.getElementById("more").onclick = () => {
  n += 1;
  const li = document.createElement("li");
  li.dataset.id = String(n);
  li.textContent = "Item " + n;
  list.appendChild(li);
};
