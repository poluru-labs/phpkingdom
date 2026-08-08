function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
document.getElementById("out").textContent = "5! = " + factorial(5);
