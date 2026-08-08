class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  speak() { return this.name + " says woof"; }
}
document.getElementById("out").textContent = new Dog("Rex").speak();
