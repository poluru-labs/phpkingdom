function gcd(a, b) {
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}
document.getElementById("out").textContent = "gcd(48, 18) = " + gcd(48, 18);
