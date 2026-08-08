function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const next = makeCounter();
document.getElementById("btn").onclick = function () {
  document.getElementById("out").textContent = String(next());
};
