let n = 0;
function onClick() {
  n += 1;
  document.getElementById("out").textContent = String(n);
}
const btn = document.getElementById("btn");
btn.addEventListener("click", onClick);
document.getElementById("off").onclick = () => btn.removeEventListener("click", onClick);
