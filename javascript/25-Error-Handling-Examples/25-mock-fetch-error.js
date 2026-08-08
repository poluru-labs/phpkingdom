const out = document.getElementById("out");
async function mockFetch(url) {
  return { ok: false, status: 404, statusText: "Not Found", url };
}
async function load() {
  const res = await mockFetch("/api/user");
  if (!res.ok) {
    throw new Error("HTTP " + res.status + " " + res.statusText + " for " + res.url);
  }
  return res;
}
(async () => {
  try {
    await load();
  } catch (e) {
    out.textContent = e.message;
  }
})();
