const fact = function f(n) { return n <= 1 ? 1 : n * f(n - 1); };
document.getElementById("out").textContent = "5!=" + fact(5);
