document.addEventListener("fullscreenchange", () => {
  document.getElementById("out").textContent =
    "fullscreenElement = " + (document.fullscreenElement ? document.fullscreenElement.id || "(el)" : "null");
});
