function applyTwice(fn, value) {
  return fn(fn(value));
}
const inc = (x) => x + 1;
document.getElementById("out").textContent = "applyTwice(inc, 3) = " + applyTwice(inc, 3);
