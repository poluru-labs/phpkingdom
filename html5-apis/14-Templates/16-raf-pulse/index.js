const el = document.getElementById("pulse");
function frame(t) {
  el.style.opacity = String(0.4 + 0.6 * Math.abs(Math.sin(t / 400)));
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
