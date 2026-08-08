const N = 20;
const odds = [];
for (let i = 1; i <= N; i++) if (i % 2 !== 0) odds.push(i);
document.getElementById("out").textContent = odds.join(" ");
