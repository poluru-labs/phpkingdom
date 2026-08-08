const adj = { A: ["B","C"], B: ["A","D"], C: ["A"], D: ["B"] };
function bfs(start) {
  const visited = new Set([start]);
  const q = [start], order = [];
  while (q.length) {
    const v = q.shift();
    order.push(v);
    for (const nb of adj[v] || []) {
      if (!visited.has(nb)) { visited.add(nb); q.push(nb); }
    }
  }
  return order;
}
document.getElementById("out").textContent = "BFS from A: " + bfs("A").join(" -> ");
