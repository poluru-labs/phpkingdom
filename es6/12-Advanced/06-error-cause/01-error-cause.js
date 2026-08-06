try {
  try {
    throw new Error("db down");
  } catch (e) {
    throw new Error("save failed", { cause: e });
  }
} catch (err) {
  document.getElementById("out").textContent =
    err.message + "\ncause: " + err.cause.message;
}
