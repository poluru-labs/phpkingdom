function withLog(fn, label) {
  return function (...args) {
    const result = fn(...args);
    return label + "(" + args.join(",") + ")=" + result;
  };
}
const add = (a, b) => a + b;
const loggedAdd = withLog(add, "add");
document.getElementById("out").textContent = loggedAdd(2, 3);
