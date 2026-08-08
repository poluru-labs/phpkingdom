document.getElementById("go").onclick = () => {
  if (!navigator.geolocation) {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  document.getElementById("out").textContent = "requesting…";
  navigator.geolocation.getCurrentPosition(
    (p) => {
      document.getElementById("out").textContent =
        "lat=" + p.coords.latitude.toFixed(5) + " lon=" + p.coords.longitude.toFixed(5) +
        "\naccuracy≈" + p.coords.accuracy + "m";
    },
    (e) => { document.getElementById("out").textContent = e.code + ": " + e.message; },
    { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
  );
};
