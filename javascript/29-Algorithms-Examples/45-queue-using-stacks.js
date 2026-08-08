class QueueUsingStacks {
  constructor() { this.inStack = []; this.outStack = []; }
  push(x) { this.inStack.push(x); }
  pop() {
    if (!this.outStack.length) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  }
  peek() {
    if (!this.outStack.length) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack[this.outStack.length - 1];
  }
}
const q = new QueueUsingStacks();
[10, 20, 30].forEach(x => q.push(x));
document.getElementById("out").textContent =
  "enqueue 10,20,30\n" +
  "front: " + q.peek() + "\n" +
  "dequeue: " + q.pop() + "\n" +
  "front: " + q.peek();
