const registry = new FinalizationRegistry(held => {
  document.getElementById("out").textContent = "finalized: " + held;
});
let obj = { id: "x" };
registry.register(obj, "x");
document.getElementById("out").textContent = "registered; drop ref to allow GC";
obj = null;
