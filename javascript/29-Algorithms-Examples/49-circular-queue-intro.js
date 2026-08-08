class CircularQueue {
  constructor(k) {
    this.buf = new Array(k);
    this.head = 0; this.tail = 0; this.size = 0; this.k = k;
  }
  enQueue(v) {
    if (this.isFull()) return false;
    this.buf[this.tail] = v;
    this.tail = (this.tail + 1) % this.k;
    this.size++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.k;
    this.size--;
    return true;
  }
  front() { return this.isEmpty() ? -1 : this.buf[this.head]; }
  rear() { return this.isEmpty() ? -1 : this.buf[(this.tail - 1 + this.k) % this.k]; }
  isEmpty() { return this.size === 0; }
  isFull() { return this.size === this.k; }
}
const q = new CircularQueue(3);
const log = [];
log.push("enq 1: " + q.enQueue(1));
log.push("enq 2: " + q.enQueue(2));
log.push("enq 3: " + q.enQueue(3));
log.push("enq 4: " + q.enQueue(4));
log.push("deq:   " + q.deQueue());
log.push("enq 4: " + q.enQueue(4));
log.push("rear:  " + q.rear());
document.getElementById("out").textContent = log.join("\n");
