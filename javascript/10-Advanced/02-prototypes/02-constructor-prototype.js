function Person(name) { this.name = name; }
Person.prototype.hello = function () { return "Hi " + this.name; };
document.getElementById("out").textContent = new Person("Ada").hello();
