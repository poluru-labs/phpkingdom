const N = 100;
let sum = 0;
for (let i = 1; i <= N; i++) sum += i;
document.getElementById("out").textContent = "sum(1..100) = " + sum;
