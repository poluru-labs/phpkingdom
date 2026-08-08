function countPaths(rows, cols) {
  if (rows === 1 || cols === 1) return 1;
  return countPaths(rows - 1, cols) + countPaths(rows, cols - 1);
}
const sizes = [[2, 2], [3, 3], [3, 4]];
document.getElementById("out").textContent = sizes
  .map(([r, c]) => r + "×" + c + " grid → " + countPaths(r, c) + " paths")
  .join("\n");
