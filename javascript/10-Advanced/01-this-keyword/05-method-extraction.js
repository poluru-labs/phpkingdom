const counter = {
  n: 1,
  inc() { this.n++; return this.n; }
};
const bound = counter.inc.bind(counter);
document.getElementById("out").textContent = "bound=" + bound();
