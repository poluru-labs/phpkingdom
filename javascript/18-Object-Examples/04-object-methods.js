const counter = {
  value: 0,
  inc() { this.value += 1; return this.value; }
};
counter.inc();
counter.inc();
document.getElementById("out").textContent = "value=" + counter.value;
