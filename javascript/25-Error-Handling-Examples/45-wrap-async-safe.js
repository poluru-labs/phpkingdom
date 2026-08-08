const out = document.getElementById("out");
async function safeAsync(fn) {
  try {
    const value = await fn();
    return { ok: true, value };
  } catch (error) {
    return { ok: false, error };
  }
}
(async () => {
  const r = await safeAsync(async () => { throw new Error("async fail"); });
  out.textContent = r.ok ? r.value : "safe: " + r.error.message;
})();
