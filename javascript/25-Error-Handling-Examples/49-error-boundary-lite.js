const out = document.getElementById("out");
function renderSafe(render) {
  try {
    return render();
  } catch (e) {
    return "⚠ " + e.message;
  }
}
const ui = renderSafe(() => {
  const data = null;
  if (!data.items) throw new Error("Cannot render list");
  return "list";
});
out.textContent = ui;
