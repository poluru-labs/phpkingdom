const map = new Map();
map.set("alice", 90);
map.set("bob", 85);
map.set("carol", 92);
const lines = [
  "get alice => " + map.get("alice"),
  "has bob => " + map.has("bob"),
  "size => " + map.size
];
map.delete("bob");
lines.push("after delete bob, size => " + map.size);
lines.push("keys => " + [...map.keys()].join(", "));
document.getElementById("out").textContent = lines.join("\n");
