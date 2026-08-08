const user = { name: "Ada", role: "admin" };
const { name, role: job = "user", active = true } = user;
document.getElementById("out").textContent = name + " / " + job + " / " + active;
