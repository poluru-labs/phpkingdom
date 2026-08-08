const nums = [2, 7, 11, 15];
const target = 9;
let pair = null;
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) { pair = [i, j]; break; }
  }
  if (pair) break;
}
document.getElementById("out").textContent = "indexes = " + JSON.stringify(pair);
