const a = document.createElement("a");
a.href = "#top";
a.textContent = "Prevented link";
document.body.insertBefore(a, document.getElementById("out"));
a.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("out").textContent = "default prevented";
});
