const box = document.getElementById("box");
const out = document.getElementById("out");
box.addEventListener("mouseenter", () => {
  box.style.background = "#cfe";
  out.textContent = "mouseenter";
});
box.addEventListener("mouseleave", () => {
  box.style.background = "";
  out.textContent = "mouseleave";
});
