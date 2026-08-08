const adj = { 1: [2,3], 2: [4], 3: [4], 4: [] };
function hasPath(from, to) {
  if (from === to) return true;
  const visited = new Set([from]), q = [from];
  while (q.length) {
    const v = q.shift();
    for (const nb of adj[v] || []) {
      if (nb === to) return true;
      if (!visited.has(nb)) { visited.add(nb); q.push(nb); }
    }
  }
  return false;
}
document.getElementById("out").textContent =
  "1 to 4 => " + hasPath(1, 4) + "\n1 to 5 => " + hasPath(1, 5);
