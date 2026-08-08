let n = 13;
if (n === 0) {
  document.getElementById("out").textContent = "0";
} else {
  let bits = "";
  const original = n;
  while (n > 0) { bits = (n % 2) + bits; n = Math.floor(n / 2); }
  document.getElementById("out").textContent = original + "₁₀ = " + bits + "₂";
}
