function fakeFetch() {
  return Promise.resolve({ ok: false, status: 404, json: async () => ({}) });
}
async function run() {
  const res = await fakeFetch();
  if (!res.ok) {
    document.getElementById("out").textContent = "HTTP " + res.status;
    return;
  }
  document.getElementById("out").textContent = "ok";
}
run();
