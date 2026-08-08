class Counter {
  static zero() { return new Counter(0); }
  constructor(n) { this._n = n; }
  get value() { return this._n; }
}
document.getElementById("out").textContent = String(Counter.zero().value);
