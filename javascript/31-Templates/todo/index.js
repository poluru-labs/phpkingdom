const list = document.getElementById("list");
const out = document.getElementById("out");
document.getElementById("add").onclick = () => {
  const v = document.getElementById("item").value.trim();
  if (!v) return;
  const li = document.createElement("li");
  li.textContent = v;
  list.appendChild(li);
  document.getElementById("item").value = "";
  out.textContent = "items=" + list.children.length;
};
