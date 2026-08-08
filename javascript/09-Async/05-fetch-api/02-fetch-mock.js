function fakeFetch() {
  return Promise.resolve({ ok: true, json: () => Promise.resolve({ site: "phpkingdom.com" }) });
}
fakeFetch()
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("out").textContent = JSON.stringify(data);
  });
