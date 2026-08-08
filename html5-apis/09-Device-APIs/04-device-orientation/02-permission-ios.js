document.getElementById("out").textContent =
  "requestPermission: " +
  (typeof DeviceOrientationEvent !== "undefined" &&
    typeof DeviceOrientationEvent.requestPermission === "function");
