let n = 0;
const btn = document.createElement("button");
btn.textContent = "Click once";
document.body.insertBefore(btn, document.getElementById("out"));
btn.addEventListener("click", () => {
  n++;
  document.getElementById("out").textContent = "fired=" + n;
}, { once: true });
document.getElementById("out").textContent = "waiting…";
