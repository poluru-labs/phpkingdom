const out = document.getElementById("out");
const log = [];
function useResource() {
  log.push("open resource");
  try {
    log.push("work");
    throw new Error("work failed");
  } finally {
    log.push("close resource");
  }
}
try {
  useResource();
} catch (e) {
  log.push("handled: " + e.message);
}
out.textContent = log.join("\n");
