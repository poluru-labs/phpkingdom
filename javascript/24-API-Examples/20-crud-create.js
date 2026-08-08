async function createUser(payload) {
  return { id: Date.now(), ...payload, createdAt: new Date().toISOString() };
}
createUser({ name: "Sam", role: "student" }).then((user) => {
  document.getElementById("out").textContent = JSON.stringify(user, null, 2);
});
