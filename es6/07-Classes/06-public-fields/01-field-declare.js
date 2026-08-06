class Counter {
  count = 0;
  inc() { this.count++; }
}
const c = new Counter();
c.inc();
document.getElementById("out").textContent = String(c.count);
