const panel = document.getElementById("panel");
const out = document.getElementById("out");
document.getElementById("open").onclick = () => {
  panel.hidden = false;
  out.textContent = "open";
};
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !panel.hidden) {
    panel.hidden = true;
    out.textContent = "closed via Escape";
  }
});
