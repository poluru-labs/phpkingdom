const v = document.getElementById("v");
document.getElementById("play").onclick = () => v.play().catch((e) => {
  document.getElementById("out").textContent = e.message;
});
document.getElementById("pause").onclick = () => v.pause();
v.addEventListener("timeupdate", () => {
  document.getElementById("out").textContent = "t=" + v.currentTime.toFixed(2);
});
