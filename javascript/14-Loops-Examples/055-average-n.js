const nums = [10, 20, 30, 40];
let sum = 0;
for (const x of nums) sum += x;
const avg = sum / nums.length;
document.getElementById("out").textContent = "average = " + avg;
