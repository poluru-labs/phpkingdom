const nums = [1, 2, 3];
const a = [];
for (let i = 0; i < nums.length; i++) a.push(nums[i] * 2);
const b = [];
nums.forEach((x) => b.push(x * 2));
document.getElementById("out").textContent =
  "for → " + a.join(", ") + "\nforEach → " + b.join(", ");
