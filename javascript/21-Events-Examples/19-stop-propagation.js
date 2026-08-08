const out = document.getElementById("out");
document.getElementById("parent").addEventListener("click", () => {
  out.textContent += "parent ";
});
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  out.textContent += "child ";
});
