const out = document.getElementById("out");
try {
  const arr = new Array(-1);
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
