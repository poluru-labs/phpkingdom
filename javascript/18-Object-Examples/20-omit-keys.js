function omit(obj, keys) {
  const skip = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !skip.has(k)));
}
const user = { name: "Ada", password: "secret", role: "admin" };
document.getElementById("out").textContent = JSON.stringify(omit(user, ["password"]));
