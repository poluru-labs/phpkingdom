function pick(obj, keys) {
  return Object.fromEntries(keys.filter((k) => k in obj).map((k) => [k, obj[k]]));
}
const user = { name: "Ada", email: "a@x.com", role: "admin" };
document.getElementById("out").textContent = JSON.stringify(pick(user, ["name", "role"]));
