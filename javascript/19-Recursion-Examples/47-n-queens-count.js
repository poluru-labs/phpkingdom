function nQueensCount(n) {
  let count = 0;
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();
  function backtrack(row) {
    if (row === n) { count++; return; }
    for (let col = 0; col < n; col++) {
      const d1 = row - col, d2 = row + col;
      if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) continue;
      cols.add(col); diag1.add(d1); diag2.add(d2);
      backtrack(row + 1);
      cols.delete(col); diag1.delete(d1); diag2.delete(d2);
    }
  }
  backtrack(0);
  return count;
}
document.getElementById("out").textContent = [4, 5, 6, 8]
  .map((n) => n + " queens → " + nQueensCount(n) + " solutions")
  .join("\n");
