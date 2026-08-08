const user = { name: "Ada", role: "eng", city: "London" };
const lines = [];
for (const key in user) {
  if (Object.hasOwn(user, key)) lines.push(key + "=" + user[key]);
}
document.getElementById("out").textContent = lines.join("\n");
