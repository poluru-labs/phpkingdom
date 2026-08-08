function gcd(a, b) {
  while (b !== 0) { const t = b; b = a % b; a = t; }
  return a;
}
function lcm(a, b) { return (a * b) / gcd(a, b); }
document.getElementById("out").textContent = "lcm(12, 18) = " + lcm(12, 18);
