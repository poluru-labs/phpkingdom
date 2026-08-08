const out = document.getElementById("out");
function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    delay(ms).then(() => { throw new Error("Timeout after " + ms + "ms"); }),
  ]);
}
(async () => {
  try {
    await withTimeout(delay(200), 50);
    out.textContent = "finished";
  } catch (e) {
    out.textContent = e.message;
  }
})();
