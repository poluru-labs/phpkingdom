const nums = [3, 12, 7, 20, 9];
const kept = [];
for (const x of nums) if (x >= 10) kept.push(x);
document.getElementById("out").textContent = kept.join(", ");
