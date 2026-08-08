const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
document.getElementById("out").textContent = squared.join(", ");
