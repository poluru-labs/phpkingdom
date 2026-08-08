const out = document.getElementById("out");
document.getElementById("btn").addEventListener("click", () => {
  out.textContent += "fired ";
}, { once: true });
document.getElementById("btn").addEventListener("click", () => {
  out.textContent += "(regular) ";
});
