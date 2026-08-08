function makeCounter() {
  let n = 0;
  return () => ++n;
}
const c = makeCounter();
document.getElementById("out").textContent = [c(), c(), c()].join(",");
