const out = document.getElementById("out");
function toPercent(n) {
  if (Number.isNaN(n)) throw new RangeError("not a number");
  if (n < 0 || n > 100) throw new RangeError("percent out of range");
  return n + "%";
}
try {
  out.textContent = toPercent(Number("abc"));
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
