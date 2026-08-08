const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
document.getElementById("out").textContent = "sum = " + sum;
