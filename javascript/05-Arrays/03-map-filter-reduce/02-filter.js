const nums = [5, 12, 8, 130];
document.getElementById("out").textContent =
  nums.filter((n) => n > 10).join(", ");
