async function run() {
  const start = typeof Promise.try === "function"
    ? Promise.try(() => { throw new Error("boom"); })
    : Promise.resolve().then(() => { throw new Error("boom"); });
  try {
    await start;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
}
run();
