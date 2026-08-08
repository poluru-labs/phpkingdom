document.getElementById("btn").onclick = () => {
  if (!navigator.geolocation) {
    document.getElementById("out").textContent = "not supported";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      document.getElementById("out").textContent =
        "lat=" + pos.coords.latitude.toFixed(5) +
        "\nlon=" + pos.coords.longitude.toFixed(5);
    },
    (err) => {
      document.getElementById("out").textContent = "error: " + err.message;
    },
    { enableHighAccuracy: false, timeout: 8000 }
  );
};
