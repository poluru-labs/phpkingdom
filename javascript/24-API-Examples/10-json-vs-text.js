async function readBody(res) {
  const type = res.headers.get("content-type") || "";
  if (type.includes("application/json")) return res.json();
  return res.text();
}
const mockJson = {
  headers: { get: (k) => k === "content-type" ? "application/json" : null },
  json: async () => ({ ok: true }),
  text: async () => "plain"
};
readBody(mockJson).then((data) => {
  document.getElementById("out").textContent = JSON.stringify(data);
});
