class Person {
  constructor(name) { this.name = name; }
  hello() { return "Hi " + this.name; }
}
document.getElementById("out").textContent = new Person("Ada").hello();
