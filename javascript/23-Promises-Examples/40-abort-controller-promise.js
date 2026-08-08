function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => resolve("finished"), ms);
    signal.addEventListener("abort", () => {
      clearTimeout(id);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
const controller = new AbortController();
wait(500, controller.signal)
  .then((v) => { document.getElementById("out").textContent = v; })
  .catch((e) => { document.getElementById("out").textContent = e.name + ": " + e.message; });
setTimeout(() => controller.abort(), 100);
