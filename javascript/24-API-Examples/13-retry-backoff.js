async function fetchWithRetry(fn, retries = 3) {
  let attempt = 0, lastErr;
  while (attempt <= retries) {
    try {
      return await fn(attempt);
    } catch (err) {
      lastErr = err;
      const delay = 100 * Math.pow(2, attempt);
      await new Promise((r) => setTimeout(r, delay));
      attempt++;
    }
  }
  throw lastErr;
}
let tries = 0;
fetchWithRetry(async () => {
  tries++;
  if (tries < 3) throw new Error("network fail #" + tries);
  return { ok: true, tries };
}).then((data) => {
  document.getElementById("out").textContent = JSON.stringify(data);
}).catch((e) => {
  document.getElementById("out").textContent = e.message;
});
