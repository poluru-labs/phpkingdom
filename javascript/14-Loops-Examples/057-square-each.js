const nums = [1, 2, 3, 4, 5];
const squares = [];
for (let i = 0; i < nums.length; i++) squares.push(nums[i] * nums[i]);
document.getElementById("out").textContent = squares.join(", ");
