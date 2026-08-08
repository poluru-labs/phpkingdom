document.getElementById("btn").onclick = async () => {
  try {
    await document.getElementById("box").requestFullscreen();
    document.getElementById("out").textContent = "fullscreen";
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
