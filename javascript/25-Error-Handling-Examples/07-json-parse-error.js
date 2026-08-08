const out = document.getElementById("out");
const bad = "{ name: 'Ada' }";
try {
  JSON.parse(bad);
  out.textContent = "parsed OK";
} catch (e) {
  out.textContent = e.name + ": " + e.message.slice(0, 60) + "...";
}
