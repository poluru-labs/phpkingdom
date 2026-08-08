const nums = [4, 17, 2, 9, 11];
let max = nums[0];
for (let i = 1; i < nums.length; i++) if (nums[i] > max) max = nums[i];
document.getElementById("out").textContent = "max = " + max;
