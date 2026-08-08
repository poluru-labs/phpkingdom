const nums = [2, 3, 4];
let prod = 1;
for (const x of nums) prod *= x;
document.getElementById("out").textContent = "product = " + prod;
