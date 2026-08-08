const user = {
  name: "Ada",
  greet() { return "Hi " + this.name; }
};
const fn = user.greet;
try {
  document.getElementById("out").textContent =
    "direct => " + user.greet() + "\n" +
    "detached => " + fn() + "\n" +
    "bound => " + fn.bind(user)();
} catch (e) {
  document.getElementById("out").textContent =
    "direct => " + user.greet() + "\n" +
    "detached threw => " + e.message + "\n" +
    "bound => " + fn.bind(user)();
}
