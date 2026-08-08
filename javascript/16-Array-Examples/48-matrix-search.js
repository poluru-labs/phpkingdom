function searchMatrix(matrix, target) {
  let r = 0, c = matrix[0].length - 1;
  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] === target) return true;
    if (matrix[r][c] > target) c--;
    else r++;
  }
  return false;
}
const m = [[1,4,7],[2,5,8],[3,6,9]];
document.getElementById("out").textContent = String(searchMatrix(m, 5));
