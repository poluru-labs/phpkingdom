const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
};
document.getElementById("out").textContent = "4! = " + factorial(4);
