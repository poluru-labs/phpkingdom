const raw = '{"when":"2026-07-21T00:00:00.000Z"}';
const obj = JSON.parse(raw, (k, v) => k === "when" ? new Date(v) : v);
document.getElementById("out").textContent = obj.when.toUTCString();
