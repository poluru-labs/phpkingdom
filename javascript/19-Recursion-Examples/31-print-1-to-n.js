function printAsc(n) {
  if (n <= 0) return [];
  return printAsc(n - 1).concat(n);
}
document.getElementById("out").textContent = printAsc(8).join(" ");
