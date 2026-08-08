const N = 6;
let fact = 1;
for (let i = 2; i <= N; i++) fact *= i;
document.getElementById("out").textContent = N + "! = " + fact;
