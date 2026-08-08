function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
const primes = [];
for (let n = 10; n <= 50; n++) if (isPrime(n)) primes.push(n);
document.getElementById("out").textContent = primes.join(" ");
