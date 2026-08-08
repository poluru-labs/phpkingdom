class Person {
  constructor(name) { this.name = name; }
  greet() { return `Hi, I am ${this.name}`; }
}
document.getElementById("out").textContent = new Person("Ada").greet();
