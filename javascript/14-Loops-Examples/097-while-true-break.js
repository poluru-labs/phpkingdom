let n = 1;
const seen = [];
while (true) {
  seen.push(n);
  if (n >= 16) break;
  n *= 2;
}
document.getElementById("out").textContent = seen.join(" → ");
