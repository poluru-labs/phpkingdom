function countDigits(n) {
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}
document.getElementById("out").textContent = "countDigits(987654) = " + countDigits(987654);
