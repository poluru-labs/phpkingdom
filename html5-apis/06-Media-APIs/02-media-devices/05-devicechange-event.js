if (navigator.mediaDevices) {
  navigator.mediaDevices.addEventListener("devicechange", () => {
    document.getElementById("out").textContent = "devicechange at " + new Date().toLocaleTimeString();
  });
} else {
  document.getElementById("out").textContent = "mediaDevices missing";
}
