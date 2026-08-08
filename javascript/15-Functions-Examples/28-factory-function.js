function createUser(name, role) {
  return { name, role, label() { return name + " (" + role + ")"; } };
}
const u1 = createUser("Ada", "Dev");
const u2 = createUser("Bob", "QA");
document.getElementById("out").textContent =
  u1.label() + "\n" + u2.label();
