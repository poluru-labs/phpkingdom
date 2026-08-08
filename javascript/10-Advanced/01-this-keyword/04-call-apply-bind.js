function greet() { return "hi " + this.name; }
const user = { name: "Ada" };
document.getElementById("out").textContent =
  greet.call(user) + "\n" + greet.bind(user)();
