const arr = ["a", "b"];
let out = "of: ";
for (const v of arr) out += v + " ";
const obj = {x:1,y:2};
out += "| in: ";
for (const k in obj) out += k + " ";
document.getElementById("out").textContent = out;
