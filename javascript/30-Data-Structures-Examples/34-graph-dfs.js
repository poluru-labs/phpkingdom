const adj = { A: ["B","C"], B: ["A","D"], C: ["A","E"], D: ["B"], E: ["C"] };
function dfs(v, visited = new Set(), order = []) {
  visited.add(v);
  order.push(v);
  for (const nb of adj[v] || []) {
    if (!visited.has(nb)) dfs(nb, visited, order);
  }
  return order;
}
document.getElementById("out").textContent = "DFS from A: " + dfs("A").join(" -> ");
