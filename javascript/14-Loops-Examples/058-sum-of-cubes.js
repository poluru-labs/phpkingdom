const N = 5;
let sum = 0;
for (let i = 1; i <= N; i++) sum += i ** 3;
document.getElementById("out").textContent = "sum of cubes = " + sum;
