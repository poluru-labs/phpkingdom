const N = 5;
const lines = [];
for (let i = 1; i <= N; i++) lines.push(" ".repeat(N - i) + "*".repeat(2 * i - 1));
for (let i = N - 1; i >= 1; i--) lines.push(" ".repeat(N - i) + "*".repeat(2 * i - 1));
document.getElementById("out").textContent = lines.join("\n");
