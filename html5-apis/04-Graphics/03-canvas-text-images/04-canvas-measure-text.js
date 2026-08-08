document.getElementById("go").onclick = () => {
  const ctx = document.getElementById("c").getContext("2d");
  ctx.clearRect(0,0,300,80);
  ctx.font = "24px Georgia";
  const t = "phpkingdom";
  const w = ctx.measureText(t).width;
  ctx.fillStyle = "#0f766e";
  ctx.fillText(t, 20, 50);
  document.getElementById("out").textContent = "width≈" + w.toFixed(1) + "px";
};
