const counter = {
  value: 0,
  inc() { this.value += 1; return this.value; }
};
document.getElementById("out").textContent = String(counter.inc());
