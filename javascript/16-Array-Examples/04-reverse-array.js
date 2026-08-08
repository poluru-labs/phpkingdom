const nums = [1, 2, 3, 4, 5];
const manual = [];
for (let i = nums.length - 1; i >= 0; i--) manual.push(nums[i]);
document.getElementById("out").textContent =
  "manual=[" + manual + "], built-in=[" + [...nums].reverse() + "]";
