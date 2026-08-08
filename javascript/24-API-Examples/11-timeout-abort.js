function fetchWithTimeout(ms) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return new Promise((resolve, reject) => {
    const signal = controller.signal;
    signal.addEventListener("abort", () => reject(new Error("Request timed out")));
    // simulate slow API
    setTimeout(() => {
      if (!signal.aborted) {
        clearTimeout(id);
        resolve({ ok: true, data: "too late or on time" });
      }
    }, ms + 50);
  });
}
fetchWithTimeout(200)
  .then((r) => { document.getElementById("out").textContent = JSON.stringify(r); })
  .catch((e) => { document.getElementById("out").textContent = e.message; });
