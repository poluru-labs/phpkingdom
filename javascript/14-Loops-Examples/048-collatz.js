let n = 17;
const seq = [n];
while (n !== 1) {
  n = n % 2 === 0 ? n / 2 : 3 * n + 1;
  seq.push(n);
}
document.getElementById("out").textContent = seq.join(" → ");
