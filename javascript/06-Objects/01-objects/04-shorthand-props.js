const name = "Ada";
const user = { name, greet() { return "hi " + this.name; } };
document.getElementById("out").textContent = user.greet();
