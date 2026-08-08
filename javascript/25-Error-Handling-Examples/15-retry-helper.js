const out = document.getElementById("out");
let attempts = 0;
async function flaky() {
  attempts += 1;
  if (attempts < 3) throw new Error("temporary");
  return "done";
}
async function retry(fn, max) {
  for (let i = 1; i <= max; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === max) throw e;
    }
  }
}
(async () => {
  try {
    const v = await retry(flaky, 3);
    out.textContent = v + " after " + attempts + " attempts";
  } catch (e) {
    out.textContent = "failed: " + e.message;
  }
})();
