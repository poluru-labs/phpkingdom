const nums = [5, 5, 5, 5];
let acc = 0;
for (const x of nums) acc = acc + x;
document.getElementById("out").textContent = "acc = " + acc;
