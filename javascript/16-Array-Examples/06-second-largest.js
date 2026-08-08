const nums = [10, 5, 20, 20, 8];
const unique = [...new Set(nums)].sort((a, b) => b - a);
document.getElementById("out").textContent = "second largest = " + unique[1];
