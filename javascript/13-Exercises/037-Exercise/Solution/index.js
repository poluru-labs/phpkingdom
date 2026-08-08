function fact(n) { return n <= 1 ? 1 : n * fact(n - 1); }
document.getElementById("out").textContent = String(fact(6));
