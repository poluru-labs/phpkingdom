const nums = [0, 1, 0, 3, 12];
const out = [];
for (const x of nums) if (x !== 0) out.push(x);
document.getElementById("out").textContent = out.join(", ");
