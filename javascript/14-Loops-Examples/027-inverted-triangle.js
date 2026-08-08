const N = 5;
const lines = [];
for (let i = N; i >= 1; i--) lines.push("*".repeat(i));
document.getElementById("out").textContent = lines.join("\n");
