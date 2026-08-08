const arr = [1, 1, 2, 2, 2, 3, 3];
let best = 1, cur = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] === arr[i - 1]) { cur++; best = Math.max(best, cur); }
  else cur = 1;
}
document.getElementById("out").textContent = "longest run = " + best;
