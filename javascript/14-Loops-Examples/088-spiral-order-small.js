const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const out = [];
let top = 0, bottom = 2, left = 0, right = 2;
while (top <= bottom && left <= right) {
  for (let c = left; c <= right; c++) out.push(m[top][c]);
  top++;
  for (let r = top; r <= bottom; r++) out.push(m[r][right]);
  right--;
  for (let c = right; c >= left; c--) out.push(m[bottom][c]);
  bottom--;
  for (let r = bottom; r >= top; r--) out.push(m[r][left]);
  left++;
}
document.getElementById("out").textContent = out.join(" ");
