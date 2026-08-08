let total = 0;
function impureAdd(n) {
  total += n;
  return total;
}
document.getElementById("out").textContent =
  impureAdd(5) + ", " + impureAdd(3) + " (total changed)";
