const N = 36;
const divs = [];
for (let i = 1; i <= N; i++) if (N % i === 0) divs.push(i);
document.getElementById("out").textContent = divs.join(", ");
