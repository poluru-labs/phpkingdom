function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const next = createCounter();
document.getElementById("out").textContent =
  [next(), next(), next()].join(", ");
