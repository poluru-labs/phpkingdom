const out = document.getElementById("out");
try {
  null.frobnicate();
} catch (e) {
  out.textContent = e.name + ": " + e.message;
}
