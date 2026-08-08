document.getElementById("btn").onclick = function () {
  if (!navigator.geolocation) {
    document.getElementById("out").textContent = "Geolocation not supported";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      document.getElementById("out").textContent =
        pos.coords.latitude.toFixed(4) + ", " + pos.coords.longitude.toFixed(4);
    },
    function (err) {
      document.getElementById("out").textContent = err.message;
    }
  );
};
