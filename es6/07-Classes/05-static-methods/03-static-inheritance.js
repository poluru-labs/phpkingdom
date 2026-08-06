class A { static id() { return "A"; } }
class B extends A {}
document.getElementById("out").textContent = B.id();
