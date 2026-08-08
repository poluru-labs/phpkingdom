document.getElementById("go").onclick = async () => {
  try {
    await document.getElementById("box").requestFullscreen();
    document.getElementById("out").textContent = "entered";
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
document.getElementById("x").onclick = async () => {
  if (document.fullscreenElement) await document.exitFullscreen();
  document.getElementById("out").textContent = "exited";
};
