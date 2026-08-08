class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.adj = new Map();
  }
  addVertex(v) { if (!this.adj.has(v)) this.adj.set(v, []); }
  addEdge(a, b) {
    this.addVertex(a); this.addVertex(b);
    this.adj.get(a).push(b);
    if (!this.directed) this.adj.get(b).push(a);
  }
}
const g = new Graph(false);
g.addEdge("A", "B"); g.addEdge("A", "C"); g.addEdge("B", "D");
const lines = [];
for (const [v, nbs] of g.adj) lines.push(v + " -> [" + nbs.join(", ") + "]");
document.getElementById("out").textContent = lines.join("\n");
