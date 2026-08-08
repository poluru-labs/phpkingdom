const out = document.getElementById("out");
const log = [];
try {
  log.push("try");
  throw new Error("fail");
} catch (e) {
  log.push("catch: " + e.message);
} finally {
  log.push("finally");
}
out.textContent = log.join("\n");
