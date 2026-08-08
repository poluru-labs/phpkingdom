const c = new AbortController();
const btn = document.createElement("button");
btn.textContent = "Click";
document.body.insertBefore(btn, document.getElementById("out"));
btn.addEventListener("click", () => {
  document.getElementById("out").textContent = "clicked";
}, { signal: c.signal });
setTimeout(() => {
  c.abort();
  document.getElementById("out").textContent += "\nlistener removed via abort";
}, 10);
