class A { constructor(v) { this.v = v; } } class B extends A { constructor() { super(9); } } document.getElementById("out").textContent = String(new B().v);
