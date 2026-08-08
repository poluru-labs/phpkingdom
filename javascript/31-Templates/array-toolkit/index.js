const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);
const evens = doubled.filter((n) => n % 2 === 0);
const sum = evens.reduce((a, b) => a + b, 0);
document.getElementById("out").textContent = JSON.stringify({ doubled, evens, sum }, null, 2);
