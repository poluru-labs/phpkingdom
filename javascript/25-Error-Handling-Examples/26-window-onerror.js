const out = document.getElementById("out");
const seen = [];
const prev = window.onerror;
window.onerror = function(msg, src, line, col, err) {
  seen.push(String(msg));
  return true;
};
try {
  throw new Error("demo global error");
} catch (e) {
  window.onerror(e.message, "", 0, 0, e);
}
window.onerror = prev;
out.textContent = "logged via onerror: " + seen.join("; ");
