const out = document.getElementById("out");
try {
  try {
    JSON.parse("{");
  } catch (inner) {
    throw new Error("Failed to load config", { cause: inner });
  }
} catch (e) {
  out.textContent = [
    e.message,
    "cause: " + e.cause.name + " — " + e.cause.message.slice(0, 40),
  ].join("\n");
}
