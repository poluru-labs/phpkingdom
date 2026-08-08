const L = 5, R = 10;
let sum = 0;
for (let i = L; i <= R; i++) sum += i;
document.getElementById("out").textContent = "sum[" + L + ".." + R + "] = " + sum;
