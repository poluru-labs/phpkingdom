let n = 9876;
let sum = 0;
while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}
document.getElementById("out").textContent = "sum digits of 9876 = " + sum;
