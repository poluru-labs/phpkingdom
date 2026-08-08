class Stack {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}
const s = new Stack();
s.push(10); s.push(20); s.push(30);
const lines = [];
lines.push("push 10, 20, 30");
lines.push("peek = " + s.peek());
lines.push("pop = " + s.pop());
lines.push("pop = " + s.pop());
lines.push("size = " + s.items.length);
document.getElementById("out").textContent = lines.join("\n");
