function showRole() {
  return this.role + " (" + this.name + ")";
}
const person = { name: "Lee", role: "Admin" };
document.getElementById("out").textContent = showRole.call(person);
