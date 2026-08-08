const nums = [10, 20, 30, 40];
const sum = nums.reduce((a, b) => a + b, 0);
const avg = sum / nums.length;
document.getElementById("out").textContent = "sum=" + sum + ", avg=" + avg;
