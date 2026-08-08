const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
let total = 0;
for (const n of doubled) total += n;
document.getElementById("out").textContent = doubled + " sum=" + total;
