function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
document.getElementById("out").textContent = "gcd(48, 18) = " + gcd(48, 18);
