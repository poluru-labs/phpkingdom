class Car { drive() { return "vroom"; } }
const c = new Car();
document.getElementById("out").textContent =
  c.drive() + " / " + (Object.getPrototypeOf(c) === Car.prototype);
