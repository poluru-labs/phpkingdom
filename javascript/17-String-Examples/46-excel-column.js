function convertToTitle(n) {
  let out = "";
  while (n > 0) {
    n--;
    out = String.fromCharCode(65 + (n % 26)) + out;
    n = Math.floor(n / 26);
  }
  return out;
}
document.getElementById("out").textContent = convertToTitle(1) + ", " + convertToTitle(28) + ", " + convertToTitle(701);
