const user = { name: "Ada", role: "admin" };
localStorage.setItem("user", JSON.stringify(user));
const back = JSON.parse(localStorage.getItem("user"));
document.getElementById("out").textContent = back.name + " / " + back.role;
