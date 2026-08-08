const ctx = document.getElementById("c").getContext("2d");
let x = 0, id;
function frame() {
  ctx.clearRect(0, 0, 280, 80);
  ctx.fillStyle = "#0f766e";
  ctx.fillRect(x, 25, 40, 30);
  x = (x + 2) % 280;
  id = requestAnimationFrame(frame);
}
id = requestAnimationFrame(frame);
document.getElementById("stop").onclick = () => cancelAnimationFrame(id);
