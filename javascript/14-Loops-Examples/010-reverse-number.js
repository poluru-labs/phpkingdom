let n = 12345;
let rev = 0;
const original = n;
while (n > 0) {
  rev = rev * 10 + (n % 10);
  n = Math.floor(n / 10);
}
document.getElementById("out").textContent = original + " → " + rev;
