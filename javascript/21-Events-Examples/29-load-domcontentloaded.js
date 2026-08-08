const lines = [];
lines.push("script readyState=" + document.readyState);
document.addEventListener("DOMContentLoaded", () => {
  lines.push("DOMContentLoaded readyState=" + document.readyState);
  document.getElementById("out").textContent = lines.join("\n");
});
window.addEventListener("load", () => {
  lines.push("load readyState=" + document.readyState);
  document.getElementById("out").textContent = lines.join("\n");
});
document.getElementById("out").textContent = lines.join("\n");
