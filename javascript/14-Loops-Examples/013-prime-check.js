function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
document.getElementById("out").textContent =
  "17 → " + isPrime(17) + "\n18 → " + isPrime(18);
