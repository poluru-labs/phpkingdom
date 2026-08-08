const cache = { users: [{ id: 1, name: "Cached Ada" }] };
async function loadUsers() {
  try {
    throw new Error("network down");
    // return await fetch("/api/users").then(r => r.json());
  } catch (err) {
    return { source: "fallback", data: cache.users, error: err.message };
  }
}
loadUsers().then((result) => {
  document.getElementById("out").textContent = JSON.stringify(result, null, 2);
});
