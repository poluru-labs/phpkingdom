class CircularQueue {
  constructor(cap) {
    this.buf = new Array(cap);
    this.cap = cap; this.head = 0; this.tail = 0; this.count = 0;
  }
  enqueue(x) {
    if (this.count === this.cap) return false;
    this.buf[this.tail] = x;
    this.tail = (this.tail + 1) % this.cap;
    this.count++;
    return true;
  }
  dequeue() {
    if (!this.count) return undefined;
    const x = this.buf[this.head];
    this.head = (this.head + 1) % this.cap;
    this.count--;
    return x;
  }
}
const cq = new CircularQueue(3);
[1, 2, 3].forEach(n => cq.enqueue(n));
const lines = ["enqueue 1,2,3 (cap=3)", "full enqueue 4 => " + cq.enqueue(4)];
lines.push("dequeue => " + cq.dequeue());
lines.push("enqueue 4 => " + cq.enqueue(4));
lines.push("dequeue => " + cq.dequeue());
document.getElementById("out").textContent = lines.join("\n");
