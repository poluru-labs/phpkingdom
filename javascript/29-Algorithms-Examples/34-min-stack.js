class MinStack {
  constructor() { this.stack = []; this.mins = []; }
  push(x) {
    this.stack.push(x);
    const m = this.mins.length ? Math.min(this.peekMin(), x) : x;
    this.mins.push(m);
  }
  pop() { this.mins.pop(); return this.stack.pop(); }
  top() { return this.stack[this.stack.length - 1]; }
  peekMin() { return this.mins[this.mins.length - 1]; }
}
const ms = new MinStack();
[3, 5, 2, 1].forEach(x => ms.push(x));
const lines = [];
lines.push("push 3,5,2,1");
lines.push("top = " + ms.top());
lines.push("min  = " + ms.peekMin());
ms.pop();
lines.push("after pop, min = " + ms.peekMin());
document.getElementById("out").textContent = lines.join("\n");
