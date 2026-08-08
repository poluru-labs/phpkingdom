const out = document.getElementById("out");
document.getElementById("outer").addEventListener("click", () => {
  out.textContent += "outer ";
});
document.getElementById("inner").addEventListener("click", (e) => {
  e.stopPropagation();
  out.textContent += "inner ";
});
