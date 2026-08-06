class A {
  x = 1;
  m() { return this.x; }
}
const a = new A();
document.getElementById("out").textContent =
  "own x=" + Object.hasOwn(a, "x") +
  "\nown m=" + Object.hasOwn(a, "m");
