const out = document.getElementById("out");
const log = [];
function demo() {
  try {
    log.push("try return");
    return "from try";
  } catch (e) {
    return "from catch";
  } finally {
    log.push("finally always");
  }
}
const v = demo();
log.push("result: " + v);
out.textContent = log.join("\n");
