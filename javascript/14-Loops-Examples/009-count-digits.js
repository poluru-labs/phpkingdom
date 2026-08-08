let n = 50832;
let count = 0;
const original = n;
if (n === 0) count = 1;
while (n > 0) { count++; n = Math.floor(n / 10); }
document.getElementById("out").textContent = original + " has " + count + " digits";
