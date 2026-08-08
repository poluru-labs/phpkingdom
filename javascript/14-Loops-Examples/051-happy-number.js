function next(n) {
  let sum = 0;
  while (n > 0) { const d = n % 10; sum += d * d; n = Math.floor(n / 10); }
  return sum;
}
function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) { seen.add(n); n = next(n); }
  return n === 1;
}
document.getElementById("out").textContent =
  "19 → " + isHappy(19) + "\n2 → " + isHappy(2);
