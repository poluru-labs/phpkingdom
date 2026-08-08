document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-tab]");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((p) => { p.hidden = true; });
  btn.classList.add("active");
  document.getElementById("panel-" + btn.dataset.tab).hidden = false;
});
