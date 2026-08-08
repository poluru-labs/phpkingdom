async function mockFetchFail() {
  return { ok: false, status: 404, statusText: "Not Found", json: async () => ({ error: "missing" }) };
}
async function getUser() {
  const res = await mockFetchFail();
  if (!res.ok) throw new Error("HTTP " + res.status + " " + res.statusText);
  return res.json();
}
getUser()
  .then((data) => { document.getElementById("out").textContent = JSON.stringify(data); })
  .catch((err) => { document.getElementById("out").textContent = "Caught: " + err.message; });
