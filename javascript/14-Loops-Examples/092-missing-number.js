const arr = [1, 2, 4, 5]; // N=5 missing 3
const N = 5;
let sum = 0;
for (const x of arr) sum += x;
const expected = (N * (N + 1)) / 2;
document.getElementById("out").textContent = "missing = " + (expected - sum);
