function max3(a, b, c) {
  return Math.max(a, b, c);
}
const values = [8, 3, 11];
document.getElementById("out").textContent = "max = " + max3(...values);
