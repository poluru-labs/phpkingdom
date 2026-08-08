async function readError(res) {
  try {
    const data = await res.json();
    return data.message || data.error || JSON.stringify(data);
  } catch {
    return res.statusText || "Request failed";
  }
}
const res = {
  statusText: "Bad Request",
  json: async () => ({ message: "Email is required" })
};
readError(res).then((msg) => {
  document.getElementById("out").textContent = msg;
});
