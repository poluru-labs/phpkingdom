const N = 10;
let h = 0;
for (let i = 1; i <= N; i++) h += 1 / i;
document.getElementById("out").textContent = "H_" + N + " ≈ " + h.toFixed(6);
