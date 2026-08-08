class Deque {
  constructor() { this.items = []; }
  pushFront(x) { this.items.unshift(x); }
  pushBack(x) { this.items.push(x); }
  popFront() { return this.items.shift(); }
  popBack() { return this.items.pop(); }
}
const d = new Deque();
d.pushBack(2); d.pushFront(1); d.pushBack(3);
const lines = ["pushBack 2, pushFront 1, pushBack 3"];
lines.push("popFront = " + d.popFront());
lines.push("popBack = " + d.popBack());
lines.push("remaining = [" + d.items.join(", ") + "]");
document.getElementById("out").textContent = lines.join("\n");
