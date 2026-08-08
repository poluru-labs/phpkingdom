function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
document.getElementById("out").textContent = "2^10 = " + power(2, 10);
