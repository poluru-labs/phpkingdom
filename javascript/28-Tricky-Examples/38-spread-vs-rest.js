const arr = [1, 2, 3];
const copy = [...arr]; // spread
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); } // rest
document.getElementById("out").textContent =
  "copy=" + copy.join(",") + " sum=" + sum(1, 2, 3);
