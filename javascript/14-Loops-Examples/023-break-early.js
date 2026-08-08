const nums = [3, 8, 2, 9, 1];
let found = -1;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 9) { found = i; break; }
}
document.getElementById("out").textContent = "index of 9 = " + found;
