function makeMultiplier(factor) {
  return (n) => n * factor;
}
const triple = makeMultiplier(3);
document.getElementById("out").textContent = "triple(7) = " + triple(7);
