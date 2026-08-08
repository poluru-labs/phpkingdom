document.querySelector(".acc").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-panel]");
  if (!btn) return;
  const id = "p" + btn.dataset.panel;
  document.querySelectorAll(".acc > div").forEach((panel) => {
    panel.hidden = panel.id !== id ? true : !panel.hidden;
  });
});
