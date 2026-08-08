function isPerfect(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) if (n % i === 0) sum += i;
  return sum === n;
}
document.getElementById("out").textContent =
  "28 → " + isPerfect(28) + "\n12 → " + isPerfect(12);
