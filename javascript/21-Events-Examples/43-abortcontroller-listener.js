const out = document.getElementById("out");
const ac = new AbortController();
document.getElementById("btn").addEventListener("click", () => {
  out.textContent += "click ";
}, { signal: ac.signal });
document.getElementById("stop").onclick = () => {
  ac.abort();
  out.textContent += "[aborted] ";
};
