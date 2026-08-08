class Animal { constructor(name) { this.name = name; } }
class Dog extends Animal {
  constructor(name) { super(name); this.kind = "dog"; }
}
const d = new Dog("Rex");
document.getElementById("out").textContent = d.name + ":" + d.kind;
