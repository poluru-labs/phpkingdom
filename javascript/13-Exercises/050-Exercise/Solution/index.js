class Person {
  constructor(name){ this.name = name; }
  greet(){ return "Hi " + this.name; }
}
document.getElementById("out").textContent = new Person("Ada").greet();
