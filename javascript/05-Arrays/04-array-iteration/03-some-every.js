const nums = [2, 4, 6];
document.getElementById("out").textContent =
  nums.every((n) => n % 2 === 0) + " / " + nums.some((n) => n > 5);
