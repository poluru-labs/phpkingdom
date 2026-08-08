const controller = new AbortController();
const pending = new Promise((resolve, reject) => {
  const t = setTimeout(() => resolve("done"), 1000);
  controller.signal.addEventListener("abort", () => {
    clearTimeout(t);
    reject(new DOMException("Aborted", "AbortError"));
  });
});
setTimeout(() => controller.abort(), 100);
pending
  .then((v) => { document.getElementById("out").textContent = v; })
  .catch((e) => { document.getElementById("out").textContent = e.name + ": " + e.message; });
