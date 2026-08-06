const nums = [1, 3, 5, 4, 2];
document.getElementById("out").textContent =
  "findLast even=" + nums.findLast((n) => n % 2 === 0);
