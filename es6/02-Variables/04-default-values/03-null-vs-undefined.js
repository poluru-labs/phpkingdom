function f(x = 1) { return x; }
document.getElementById("out").textContent =
  "f()=" + f() + " f(null)=" + f(null);
