const t0 = performance.now();
let x = 0;
for (let i = 0; i < 1e6; i++) x += i;
const t1 = performance.now();
document.getElementById("out").textContent =
  "loop ms ≈ " + (t1 - t0).toFixed(3) + "\nx=" + x;
