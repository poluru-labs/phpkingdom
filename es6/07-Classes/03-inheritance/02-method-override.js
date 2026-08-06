class A { id() { return "A"; } }
class B extends A { id() { return "B"; } }
document.getElementById("out").textContent = new B().id();
