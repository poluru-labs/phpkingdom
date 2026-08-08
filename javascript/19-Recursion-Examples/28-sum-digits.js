function sumDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
document.getElementById("out").textContent = "sumDigits(12345) = " + sumDigits(12345);
