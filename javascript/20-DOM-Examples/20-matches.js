const a = document.getElementById("a");
const b = document.getElementById("b");
document.getElementById("out").textContent =
  "A.primary? " + a.matches(".primary") +
  "\nB.primary? " + b.matches(".primary");
