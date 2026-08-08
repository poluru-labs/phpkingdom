const ctx = document.getElementById("c").getContext("2d");
ctx.fillStyle = "#0f766e"; ctx.fillRect(0,0,120,60);
ctx.fillStyle = "#fff"; ctx.font = "16px Georgia"; ctx.fillText("PK", 40, 36);
document.getElementById("go").onclick = () => {
  const url = document.getElementById("c").toDataURL("image/png");
  document.getElementById("out").textContent = url.slice(0, 64) + "…";
};
