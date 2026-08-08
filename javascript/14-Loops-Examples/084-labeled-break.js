const grid = [[1, 2], [3, 9], [4, 5]];
let found = null;
outer: for (let r = 0; r < grid.length; r++) {
  for (let c = 0; c < grid[r].length; c++) {
    if (grid[r][c] === 9) { found = [r, c]; break outer; }
  }
}
document.getElementById("out").textContent = "found at " + JSON.stringify(found);
