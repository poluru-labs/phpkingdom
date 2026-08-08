const nums = [1, 2, 3, 4, 5, 6];
const even = [], odd = [];
for (const x of nums) (x % 2 === 0 ? even : odd).push(x);
document.getElementById("out").textContent =
  "even: " + even.join(", ") + "\nodd: " + odd.join(", ");
