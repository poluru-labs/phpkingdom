class User {
  role = "guest";
  constructor(name) { this.name = name; }
}
document.getElementById("out").textContent =
  JSON.stringify(new User("Sam"));
