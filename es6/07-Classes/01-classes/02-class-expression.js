const Counter = class {
  constructor() { this.n = 0; }
  inc() { this.n += 1; return this.n; }
};
document.getElementById("out").textContent = new Counter().inc();
