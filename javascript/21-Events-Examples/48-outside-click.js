const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const out = document.getElementById("out");
toggle.onclick = (e) => {
  e.stopPropagation();
  menu.hidden = !menu.hidden;
  out.textContent = menu.hidden ? "closed" : "open";
};
document.addEventListener("click", (e) => {
  if (menu.hidden) return;
  if (!menu.contains(e.target) && e.target !== toggle) {
    menu.hidden = true;
    out.textContent = "closed (outside click)";
  }
});
