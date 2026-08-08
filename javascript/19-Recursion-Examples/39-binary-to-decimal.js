function binToDec(bin) {
  if (bin.length === 1) return bin === "1" ? 1 : 0;
  return binToDec(bin.slice(0, -1)) * 2 + (bin.slice(-1) === "1" ? 1 : 0);
}
document.getElementById("out").textContent = "1101₂ = " + binToDec("1101") + "₁₀";
