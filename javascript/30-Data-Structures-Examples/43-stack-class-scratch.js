class Stack {
  constructor() { this.data = []; this.top = -1; }
  push(x) { this.data[++this.top] = x; }
  pop() { if (this.isEmpty()) return undefined; return this.data[this.top--]; }
  peek() { return this.data[this.top]; }
  isEmpty() { return this.top === -1; }
  size() { return this.top + 1; }
}
const s = new Stack();
[1,2,3].forEach(n => s.push(n));
document.getElementById("out").textContent =
  "size=" + s.size() + ", peek=" + s.peek() + ", pop=" + s.pop() + ", isEmpty=" + s.isEmpty();
