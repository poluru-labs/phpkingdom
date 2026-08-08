const edges = [[0,1],[1,2],[3,4]];
function countComponents(n, edges) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) { adj[a].push(b); adj[b].push(a); }
  const visited = new Set();
  let count = 0;
  function dfs(v) {
    visited.add(v);
    for (const nb of adj[v]) if (!visited.has(nb)) dfs(nb);
  }
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) { dfs(i); count++; }
  }
  return count;
}
document.getElementById("out").textContent = "components (n=5): " + countComponents(5, edges);
