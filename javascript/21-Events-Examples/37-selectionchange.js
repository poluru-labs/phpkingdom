document.addEventListener("selectionchange", () => {
  const t = String(window.getSelection());
  document.getElementById("out").textContent = t ? ("selected: " + t) : "(no selection)";
});
