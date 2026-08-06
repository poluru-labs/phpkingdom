const nums = [1, 2, 3, 4];
const result = nums.filter((n) => n % 2 === 0).map((n) => n * 10);
document.getElementById("out").textContent = result.join(",") +
  " sum=" + nums.reduce((a, b) => a + b, 0);
