const KEY = "pk:tpl:notes";
const list = document.getElementById("list");
const out = document.getElementById("out");
function load() { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
function render() {
  const items = load();
  list.innerHTML = items.map((n,i) => "<li>" + n + " <button data-i='" + i + "'>x</button></li>").join("");
  out.textContent = items.length + " notes";
}
document.getElementById("add").onclick = () => {
  const v = document.getElementById("note").value.trim();
  if (!v) return;
  const items = load(); items.push(v); localStorage.setItem(KEY, JSON.stringify(items));
  document.getElementById("note").value = ""; render();
};
list.onclick = (e) => {
  const btn = e.target.closest("button[data-i]"); if (!btn) return;
  const items = load(); items.splice(+btn.dataset.i, 1); localStorage.setItem(KEY, JSON.stringify(items)); render();
};
render();
