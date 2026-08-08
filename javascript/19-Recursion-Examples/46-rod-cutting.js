const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20];
function rodCut(n) {
  if (n === 0) return 0;
  let best = 0;
  for (let i = 1; i <= n; i++) {
    best = Math.max(best, prices[i] + rodCut(n - i));
  }
  return best;
}
document.getElementById("out").textContent = "max revenue for length 8: " + rodCut(8);
