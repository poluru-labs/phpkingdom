async function run() {
  try {
    await Promise.reject(new Error("failed await"));
  } catch (err) {
    document.getElementById("out").textContent = err.message;
  }
}
run();
