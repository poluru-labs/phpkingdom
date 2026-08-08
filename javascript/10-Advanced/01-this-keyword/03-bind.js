function greet() { return "Hello " + this.name; }
const bound = greet.bind({ name: "Ada" });
document.getElementById("out").textContent = bound();
