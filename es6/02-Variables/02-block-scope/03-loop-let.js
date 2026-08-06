const vals = [];
for (let i = 0; i < 3; i++) vals.push(() => i);
document.getElementById("out").textContent = vals.map((f) => f()).join(",");
