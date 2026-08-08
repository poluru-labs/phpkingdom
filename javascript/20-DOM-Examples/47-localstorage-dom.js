const KEY = "dom-examples-count";
const el = document.getElementById("n");
el.textContent = localStorage.getItem(KEY) || "0";
document.getElementById("inc").onclick = () => {
  const next = Number(el.textContent) + 1;
  el.textContent = String(next);
  localStorage.setItem(KEY, String(next));
};
document.getElementById("reset").onclick = () => {
  el.textContent = "0";
  localStorage.removeItem(KEY);
};
