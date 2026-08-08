const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let total = 0;
for (const d of days) total += d;
document.getElementById("out").textContent = "non-leap year days = " + total;
