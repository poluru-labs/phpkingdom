class DNode {
  constructor(val) { this.val = val; this.prev = null; this.next = null; }
}
class DoublyList {
  constructor() { this.head = null; this.tail = null; }
  append(val) {
    const node = new DNode(val);
    if (!this.head) { this.head = this.tail = node; return; }
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
}
const dl = new DoublyList();
[1, 2, 3].forEach(v => dl.append(v));
const fwd = [], bwd = [];
for (let c = dl.head; c; c = c.next) fwd.push(c.val);
for (let c = dl.tail; c; c = c.prev) bwd.push(c.val);
document.getElementById("out").textContent = "forward: " + fwd.join(" <-> ") + "\nbackward: " + bwd.join(" <-> ");
