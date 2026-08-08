function Person(name) { this.name = name; }
Person.prototype.hello = function () { return "Hi, I am " + this.name; };
document.getElementById("out").textContent = new Person("Ada").hello();
