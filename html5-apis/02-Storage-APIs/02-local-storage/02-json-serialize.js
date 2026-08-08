const user = { name: "Ada", role: "dev" };
localStorage.setItem("user", JSON.stringify(user));
const parsed = JSON.parse(localStorage.getItem("user"));
document.getElementById("out").textContent = JSON.stringify(parsed, null, 2);
