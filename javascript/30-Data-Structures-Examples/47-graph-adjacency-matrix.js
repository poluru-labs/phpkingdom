function buildMatrix(n, edges, directed = false) {
  const mat = Array.from({ length: n }, () => new Array(n).fill(0));
  for (const [u, v] of edges) {
    mat[u][v] = 1;
    if (!directed) mat[v][u] = 1;
  }
  return mat;
}
const mat = buildMatrix(4, [[0,1],[0,2],[1,3],[2,3]]);
const lines = mat.map((row, i) => "row " + i + ": " + row.join(" "));
document.getElementById("out").textContent = lines.join("\n");
