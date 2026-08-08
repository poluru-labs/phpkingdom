function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
document.getElementById("out").textContent = String(sum(1, 2, 3, 4));
