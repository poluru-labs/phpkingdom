const nums = [10, 5, 20, 8, 20];
let first = -Infinity, second = -Infinity;
for (const x of nums) {
  if (x > first) { second = first; first = x; }
  else if (x > second && x !== first) second = x;
}
document.getElementById("out").textContent = "second max = " + second;
