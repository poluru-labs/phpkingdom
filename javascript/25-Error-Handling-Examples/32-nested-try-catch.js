const out = document.getElementById("out");
const log = [];
try {
  try {
    throw new TypeError("inner");
  } catch (e) {
    if (e instanceof TypeError) {
      log.push("inner handled TypeError");
    } else {
      throw e;
    }
  }
  throw new Error("outer");
} catch (e) {
  log.push("outer: " + e.message);
}
out.textContent = log.join("\n");
