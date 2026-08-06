async function run() {
  if (typeof Promise.try !== "function") {
    // polyfill idea
    const result = await Promise.resolve().then(() => {
      return 1 + 1;
    });
    document.getElementById("out").textContent = "fallback: " + result;
    return;
  }
  const result = await Promise.try(() => 1 + 1);
  document.getElementById("out").textContent = String(result);
}
run();
