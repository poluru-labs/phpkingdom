const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const lines = [];
for (let r = 0; r < m.length; r++) {
  let row = "";
  for (let c = 0; c < m[r].length; c++) row += m[r][c] + " ";
  lines.push(row.trim());
}
document.getElementById("out").textContent = lines.join("\n");
