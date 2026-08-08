const parts = [];
for (let i = 0; i < 3; i++) parts.push(() => i);
document.getElementById("out").textContent = parts.map(f => f()).join(",");
