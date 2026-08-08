const pipe = (...fns) => (x) => fns.reduce((v, fn) => fn(v), x);
const inc = (x) => x + 1;
const double = (x) => x * 2;
document.getElementById("out").textContent =
  "pipe(inc, double)(5) = " + pipe(inc, double)(5);
