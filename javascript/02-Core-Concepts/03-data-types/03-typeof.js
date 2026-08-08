function describe(v) { return typeof v; }
document.getElementById("out").textContent =
  [describe(1), describe("a"), describe({})].join(", ");
