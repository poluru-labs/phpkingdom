const nums = [2, 3, 4];
const out = [];
let p = 1;
for (const x of nums) { p *= x; out.push(p); }
document.getElementById("out").textContent = out.join(", ");
