function fact(k) { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; }
function isStrong(n) {
  let sum = 0, x = n;
  while (x > 0) { sum += fact(x % 10); x = Math.floor(x / 10); }
  return sum === n;
}
document.getElementById("out").textContent =
  "145 → " + isStrong(145) + "\n123 → " + isStrong(123);
