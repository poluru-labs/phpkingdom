function add(a, b) { return a + b; }
const variadic = (...args) => args.length;
document.getElementById("out").textContent =
  "add.length = " + add.length + "\nvariadic.length = " + variadic.length;
