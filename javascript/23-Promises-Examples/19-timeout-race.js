function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout after " + ms + "ms")), ms)
  );
  return Promise.race([promise, timeout]);
}
const slow = new Promise((resolve) => setTimeout(() => resolve("data"), 400));
withTimeout(slow, 150)
  .then((v) => { document.getElementById("out").textContent = v; })
  .catch((e) => { document.getElementById("out").textContent = e.message; });
