async function patchUser(id, patch) {
  const current = { id, name: "Ada", role: "user" };
  return { ...current, ...patch, updatedAt: "now" };
}
patchUser(1, { role: "admin" }).then((user) => {
  document.getElementById("out").textContent = JSON.stringify(user, null, 2);
});
