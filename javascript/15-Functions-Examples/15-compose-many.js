const compose = (...fns) => (x) => fns.reduceRight((v, fn) => fn(v), x);
const inc = (x) => x + 1;
const square = (x) => x * x;
document.getElementById("out").textContent =
  "compose(inc, square)(4) = " + compose(inc, square)(4);
