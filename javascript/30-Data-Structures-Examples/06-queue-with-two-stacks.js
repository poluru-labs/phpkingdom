class QueueTwoStacks {
  constructor() { this.inStack = []; this.outStack = []; }
  enqueue(x) { this.inStack.push(x); }
  dequeue() {
    if (!this.outStack.length) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  }
}
const q = new QueueTwoStacks();
[10, 20, 30].forEach(n => q.enqueue(n));
document.getElementById("out").textContent =
  "dequeue order: " + [q.dequeue(), q.dequeue(), q.dequeue()].join(", ");
