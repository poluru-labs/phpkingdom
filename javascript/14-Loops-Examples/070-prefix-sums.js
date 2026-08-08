const nums = [2, 4, 1, 3];
const pref = [];
let running = 0;
for (const x of nums) { running += x; pref.push(running); }
document.getElementById("out").textContent = pref.join(", ");
