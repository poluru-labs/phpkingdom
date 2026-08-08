const adj = { A: ["B","C"], B: ["A","D","E"], C: ["A","F"], D: ["B"], E: ["B","F"], F: ["C","E"] };
function shortestPath(start, goal) {
  const q = [[start, 0]];
  const visited = new Set([start]);
  while (q.length) {
    const [v, dist] = q.shift();
    if (v === goal) return dist;
    for (const nb of adj[v] || []) {
      if (!visited.has(nb)) { visited.add(nb); q.push([nb, dist + 1]); }
    }
  }
  return -1;
}
document.getElementById("out").textContent = "A to F distance = " + shortestPath("A", "F");
