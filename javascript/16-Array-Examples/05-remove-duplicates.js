const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)];
document.getElementById("out").textContent = unique.join(", ");
