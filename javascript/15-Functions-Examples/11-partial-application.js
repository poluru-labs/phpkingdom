function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}
function add(a, b, c) { return a + b + c; }
const addFiveAnd = partial(add, 5, 10);
document.getElementById("out").textContent = "addFiveAnd(7) = " + addFiveAnd(7);
