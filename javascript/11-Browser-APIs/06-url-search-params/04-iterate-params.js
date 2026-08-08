const sp = new URLSearchParams("x=1&y=2");
const lines = [];
for (const [k, v] of sp) lines.push(k + "=" + v);
document.getElementById("out").textContent = lines.join("\n");
