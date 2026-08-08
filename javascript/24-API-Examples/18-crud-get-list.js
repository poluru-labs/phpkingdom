async function listUsers() {
  // return fetch("/api/users").then(r => r.json())
  return [
    { id: 1, name: "Ada" },
    { id: 2, name: "Lin" }
  ];
}
listUsers().then((users) => {
  document.getElementById("out").textContent = JSON.stringify(users, null, 2);
});
