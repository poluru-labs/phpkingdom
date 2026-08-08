async function mockPost(url, body) {
  return {
    ok: true,
    status: 201,
    json: async () => ({ saved: true, received: body, url })
  };
}
const payload = { name: "Ada", role: "author" };
mockPost("/api/users", payload)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data, null, 2);
  });
// Real shape:
// fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
