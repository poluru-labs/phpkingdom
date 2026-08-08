function decToBin(n) {
  if (n <= 1) return String(n);
  return decToBin(Math.floor(n / 2)) + (n % 2);
}
document.getElementById("out").textContent = "13₁₀ = " + decToBin(13) + "₂";
