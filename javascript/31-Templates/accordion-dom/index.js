document.getElementById("acc").onclick = (e) => {
  const btn = e.target.closest("button[data-panel]");
  if (!btn) return;
  const id = "p" + btn.dataset.panel;
  const panel = document.getElementById(id);
  panel.hidden = !panel.hidden;
  document.getElementById("out").textContent = id + " hidden=" + panel.hidden;
};
