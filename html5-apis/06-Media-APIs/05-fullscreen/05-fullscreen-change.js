document.addEventListener("fullscreenchange", () => {
  document.getElementById("out").textContent =
    "fullscreenElement=" + (document.fullscreenElement && document.fullscreenElement.id);
});
document.getElementById("out").textContent = "listen ready — toggle fullscreen elsewhere";
