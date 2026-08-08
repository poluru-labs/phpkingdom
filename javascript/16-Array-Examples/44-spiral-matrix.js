function spiralOrder(matrix) {
  if (!matrix.length) return [];
  const out = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) out.push(matrix[top][c]);
    top++;
    for (let r = top; r <= bottom; r++) out.push(matrix[r][right]);
    right--;
    if (top <= bottom) for (let c = right; c >= left; c--) out.push(matrix[bottom][c]);
    bottom--;
    if (left <= right) for (let r = bottom; r >= top; r--) out.push(matrix[r][left]);
    left++;
  }
  return out;
}
document.getElementById("out").textContent = spiralOrder([[1,2,3],[4,5,6],[7,8,9]]).join(", ");
