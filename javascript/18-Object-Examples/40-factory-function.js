function createUser(name, role = "student") {
  return { name, role, introduce() { return this.name + " (" + this.role + ")"; } };
}
const u1 = createUser("Ada", "admin");
const u2 = createUser("Lin");
document.getElementById("out").textContent = u1.introduce() + " | " + u2.introduce();
