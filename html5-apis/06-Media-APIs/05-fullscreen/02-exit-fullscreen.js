document.getElementById("btn").onclick = async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    document.getElementById("out").textContent = "exited";
  } else {
    document.getElementById("out").textContent = "not in fullscreen";
  }
};
