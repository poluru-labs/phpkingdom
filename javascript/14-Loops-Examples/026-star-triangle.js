const N = 5;
const lines = [];
for (let i = 1; i <= N; i++) lines.push("*".repeat(i));
document.getElementById("out").textContent = lines.join("\n");
