const pad = document.getElementById("pad");
const out = document.getElementById("out");
pad.addEventListener("pointerdown", (e) => {
  out.textContent = "down type=" + e.pointerType + " id=" + e.pointerId;
  pad.setPointerCapture(e.pointerId);
});
pad.addEventListener("pointerup", (e) => {
  out.textContent += "\nup type=" + e.pointerType;
});
