function mockFetch(url) {
  return Promise.resolve({
    ok: true,
    status: 200,
    json: async () => ({ site: "phpkingdom.com", url })
  });
}
mockFetch("/api/site")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data, null, 2);
  });
