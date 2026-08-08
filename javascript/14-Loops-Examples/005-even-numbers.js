const N = 20;
const evens = [];
for (let i = 1; i <= N; i++) if (i % 2 === 0) evens.push(i);
document.getElementById("out").textContent = evens.join(" ");
