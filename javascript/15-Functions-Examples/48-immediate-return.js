const nums = [3, 1, 4, 2];
const sorted = nums.slice().sort((a, b) => a - b);
document.getElementById("out").textContent = sorted.join(", ");
