function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
}
const sum = curry((a, b, c) => a + b + c);
document.getElementById("out").textContent =
  "sum(1)(2)(3) = " + sum(1)(2)(3);
