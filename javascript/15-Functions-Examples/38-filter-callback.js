const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((n) => n % 2 === 0);
document.getElementById("out").textContent = evens.join(", ");
