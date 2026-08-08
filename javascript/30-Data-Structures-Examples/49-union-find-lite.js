class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return false;
    if (this.rank[ra] < this.rank[rb]) this.parent[ra] = rb;
    else if (this.rank[ra] > this.rank[rb]) this.parent[rb] = ra;
    else { this.parent[rb] = ra; this.rank[ra]++; }
    return true;
  }
  connected(a, b) { return this.find(a) === this.find(b); }
}
const uf = new UnionFind(5);
[[0,1],[1,2],[3,4]].forEach(([a,b]) => uf.union(a,b));
document.getElementById("out").textContent =
  "0 connected 2 => " + uf.connected(0, 2) + "\n0 connected 3 => " + uf.connected(0, 3);
