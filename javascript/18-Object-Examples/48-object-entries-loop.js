const site = { name: "phpkingdom.com", author: "Subrahmanyam Poluru" };
const lines = [];
for (const [key, value] of Object.entries(site)) lines.push(key + ": " + value);
document.getElementById("out").textContent = lines.join("\n");
