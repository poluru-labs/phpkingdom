class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name; }
}
class Dog extends Animal {
  speak() { return super.speak() + " barks"; }
}
document.getElementById("out").textContent = new Dog("Rex").speak();
