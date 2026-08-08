class DiGraph {
  constructor() { this.adj = new Map(); }
  addEdge(from, to) {
    if (!this.adj.has(from)) this.adj.set(from, []);
    if (!this.adj.has(to)) this.adj.set(to, []);
    this.adj.get(from).push(to);
  }
}
const g = new DiGraph();
[["0","1"],["0","2"],["1","3"],["2","3"]].forEach(([a,b]) => g.addEdge(a, b));
document.getElementById("out").textContent =
  "edges from 0: " + g.adj.get("0").join(", ") + "\nedges from 1: " + g.adj.get("1").join(", ");
