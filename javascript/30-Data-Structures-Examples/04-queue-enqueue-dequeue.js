class Queue {
  constructor() { this.items = []; }
  enqueue(x) { this.items.push(x); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  size() { return this.items.length; }
}
const q = new Queue();
["A", "B", "C"].forEach(x => q.enqueue(x));
const lines = ["enqueue A,B,C", "front = " + q.front(), "dequeue = " + q.dequeue()];
lines.push("dequeue = " + q.dequeue());
lines.push("front = " + q.front());
document.getElementById("out").textContent = lines.join("\n");
