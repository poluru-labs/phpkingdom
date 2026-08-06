const id = Symbol("id");
const user = { [id]: 42, name: "Ada" };
document.getElementById("out").textContent =
  user[id] + " keys=" + Object.keys(user).join(",");
