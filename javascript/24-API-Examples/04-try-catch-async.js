function apiGet() {
  return Promise.resolve({ ok: true, json: async () => ({ message: "hello API" }) });
}
async function load() {
  try {
    const res = await apiGet();
    const data = await res.json();
    document.getElementById("out").textContent = data.message;
  } catch (err) {
    document.getElementById("out").textContent = err.message;
  }
}
load();
