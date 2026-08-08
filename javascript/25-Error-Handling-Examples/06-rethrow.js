const out = document.getElementById("out");
function inner() {
  try {
    throw new Error("db timeout");
  } catch (e) {
    console.info("[demo] logged:", e.message);
    throw e;
  }
}
try {
  inner();
} catch (e) {
  out.textContent = "outer caught: " + e.message;
}
