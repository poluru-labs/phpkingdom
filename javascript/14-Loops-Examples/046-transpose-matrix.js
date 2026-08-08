const m = [[1, 2, 3], [4, 5, 6]];
const rows = m.length, cols = m[0].length;
const t = [];
for (let c = 0; c < cols; c++) {
  t[c] = [];
  for (let r = 0; r < rows; r++) t[c][r] = m[r][c];
}
document.getElementById("out").textContent = t.map((row) => row.join(" ")).join("\n");
