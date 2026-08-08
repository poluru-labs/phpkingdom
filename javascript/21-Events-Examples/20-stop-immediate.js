const btn = document.getElementById("btn");
const out = document.getElementById("out");
btn.addEventListener("click", (e) => {
  out.textContent = "first ";
  e.stopImmediatePropagation();
});
btn.addEventListener("click", () => {
  out.textContent += "second";
});
