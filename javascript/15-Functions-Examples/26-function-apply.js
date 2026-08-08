function maxOf(a, b, c) {
  return Math.max(a, b, c);
}
document.getElementById("out").textContent =
  "max = " + maxOf.apply(null, [4, 9, 2]);
