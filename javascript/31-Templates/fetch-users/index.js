function fakeFetch() {
  return Promise.resolve([{ id: 1, name: "Ada" }, { id: 2, name: "Grace" }]);
}
document.getElementById("go").onclick = async () => {
  document.getElementById("out").textContent = "loading…";
  const users = await fakeFetch();
  document.getElementById("out").textContent = users.map(u => u.id + ": " + u.name).join("\n");
};
