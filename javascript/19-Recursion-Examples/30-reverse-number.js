function reverseNumber(n, acc = 0) {
  if (n === 0) return acc;
  return reverseNumber(Math.floor(n / 10), acc * 10 + (n % 10));
}
document.getElementById("out").textContent = "reverse(12345) = " + reverseNumber(12345);
