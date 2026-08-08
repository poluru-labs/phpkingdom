const out = document.getElementById("out");
function len(s) {
  if (s == null) throw new TypeError("value is null or undefined");
  return s.length;
}
try {
  out.textContent = String(len(undefined));
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
