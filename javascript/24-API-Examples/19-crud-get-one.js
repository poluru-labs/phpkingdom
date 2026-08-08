async function getUser(id) {
  const db = { 1: { id: 1, name: "Ada" }, 2: { id: 2, name: "Lin" } };
  if (!db[id]) throw new Error("404 Not Found");
  return db[id];
}
getUser(1).then((u) => {
  document.getElementById("out").textContent = JSON.stringify(u);
}).catch((e) => {
  document.getElementById("out").textContent = e.message;
});
