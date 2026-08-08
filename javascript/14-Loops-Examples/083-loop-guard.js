let x = 1;
let steps = 0;
const MAX = 20;
while (x < 1000 && steps < MAX) {
  x *= 2;
  steps++;
}
document.getElementById("out").textContent =
  "x=" + x + " steps=" + steps + " (guard MAX=" + MAX + ")";
