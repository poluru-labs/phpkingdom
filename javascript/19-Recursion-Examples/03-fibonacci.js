function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}
const seq = Array.from({ length: 10 }, (_, i) => fib(i));
document.getElementById("out").textContent = "fib(0..9): " + seq.join(", ");
