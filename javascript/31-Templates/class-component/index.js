class Greeter {
  constructor(name) { this.name = name; }
  render(el) { el.textContent = "Hello, " + this.name; }
}
const g = new Greeter("Ada");
g.render(document.getElementById("host"));
document.getElementById("out").textContent = "rendered";
