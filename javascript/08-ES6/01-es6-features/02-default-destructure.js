function label({ name = "Guest", role = "user" } = {}) {
  return name + " (" + role + ")";
}
document.getElementById("out").textContent = label({ name: "Ada" });
