const N = 5;
const out = [];
for (let i = 1; i <= N; i++) out.push(i);
for (let i = N - 1; i >= 1; i--) out.push(i);
document.getElementById("out").textContent = out.join(" ");
