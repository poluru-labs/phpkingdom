const nums = [4, 17, 2, 9, 11];
let min = nums[0];
for (let i = 1; i < nums.length; i++) if (nums[i] < min) min = nums[i];
document.getElementById("out").textContent = "min = " + min;
