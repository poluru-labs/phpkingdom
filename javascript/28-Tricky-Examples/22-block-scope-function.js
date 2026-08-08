{
  function local() { return "inside"; }
  document.getElementById("out").textContent = local();
}
try {
  // may or may not throw depending on engine/mode legacy behavior
  document.getElementById("out").textContent += "\noutside: " + typeof local;
} catch (e) {
  document.getElementById("out").textContent += "\noutside threw: " + e.message;
}
