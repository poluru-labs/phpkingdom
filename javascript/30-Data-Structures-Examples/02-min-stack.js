class MinStack {
  constructor() { this.stack = []; this.mins = []; }
  push(x) {
    this.stack.push(x);
    const m = this.mins.length ? this.mins[this.mins.length - 1] : Infinity;
    this.mins.push(Math.min(m, x));
  }
  pop() { this.mins.pop(); return this.stack.pop(); }
  getMin() { return this.mins[this.mins.length - 1]; }
}
const ms = new MinStack();
[5, 3, 7, 2, 8].forEach(n => ms.push(n));
const out = ["push 5,3,7,2,8", "min = " + ms.getMin()];
ms.pop(); ms.pop();
out.push("after two pops, min = " + ms.getMin());
document.getElementById("out").textContent = out.join("\n");
