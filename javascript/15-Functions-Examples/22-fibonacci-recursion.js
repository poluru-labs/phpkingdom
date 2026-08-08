function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
document.getElementById("out").textContent =
  [0, 1, 2, 3, 4, 5, 6].map(fib).join(", ");
