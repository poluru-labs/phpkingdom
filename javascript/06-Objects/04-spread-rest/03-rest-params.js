function total(first, ...rest) {
  return rest.reduce((s, n) => s + n, first);
}
document.getElementById("out").textContent = String(total(1, 2, 3, 4));
