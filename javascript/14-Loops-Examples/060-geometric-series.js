const a = 2, r = 3, N = 5;
let sum = 0, term = a;
for (let i = 0; i < N; i++) { sum += term; term *= r; }
document.getElementById("out").textContent = "sum = " + sum;
