const query = `
  query Site($id: ID!) {
    site(id: $id) { name author }
  }`;
const payload = {
  query,
  variables: { id: "phpkingdom" }
};
document.getElementById("out").textContent = JSON.stringify(payload, null, 2);
// fetch("/graphql", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
