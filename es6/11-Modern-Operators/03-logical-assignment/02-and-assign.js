let user = { name: "Ada" };
user &&= { ...user, ok: true };
document.getElementById("out").textContent = JSON.stringify(user);
