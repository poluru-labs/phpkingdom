const nums = [3, -1, 0, 4, -2, 0, 7];
let pos = 0, neg = 0, zero = 0;
for (const x of nums) {
  if (x > 0) pos++;
  else if (x < 0) neg++;
  else zero++;
}
document.getElementById("out").textContent =
  "pos=" + pos + " neg=" + neg + " zero=" + zero;
