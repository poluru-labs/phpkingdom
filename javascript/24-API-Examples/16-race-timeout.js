function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms)
  );
  return Promise.race([promise, timeout]);
}
const slow = new Promise((resolve) => setTimeout(() => resolve("data"), 500));
withTimeout(slow, 200)
  .then((v) => { document.getElementById("out").textContent = v; })
  .catch((e) => { document.getElementById("out").textContent = e.message; });
