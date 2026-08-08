const fact = function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
document.getElementById("out").textContent = String(fact(5));
