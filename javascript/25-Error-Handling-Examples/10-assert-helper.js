function assert(cond, msg) {
  if (!cond) throw new Error(msg || "Assertion failed");
}
const out = document.getElementById("out");
try {
  const items = [];
  assert(items.length > 0, "items must not be empty");
} catch (e) {
  out.textContent = "assert failed: " + e.message;
}
