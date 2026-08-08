const grid = [[1, 2], [3, 4], [5, 6]];
let found = false;
let pos = null;
for (let r = 0; r < grid.length && !found; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    if (grid[r][c] === 4) { pos = [r, c]; found = true; break; }
  }
}
document.getElementById("out").textContent = "pos=" + JSON.stringify(pos);
