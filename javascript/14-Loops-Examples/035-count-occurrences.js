const arr = [1, 2, 2, 3, 2, 4];
const target = 2;
let count = 0;
for (const x of arr) if (x === target) count++;
document.getElementById("out").textContent = target + " appears " + count + " times";
