const out = document.getElementById("out");
function deep() {
  throw new Error("trace me");
}
try {
  deep();
} catch (e) {
  const first = (e.stack || "").split("\n")[1] || "(no stack)";
  out.textContent = "stack line: " + first.trim();
}
