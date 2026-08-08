let id = null;
document.getElementById("start").onclick = () => {
  if (!navigator.geolocation) return;
  id = navigator.geolocation.watchPosition(
    (p) => { document.getElementById("out").textContent = "lat=" + p.coords.latitude; },
    (e) => { document.getElementById("out").textContent = e.message; }
  );
};
document.getElementById("stop").onclick = () => {
  if (id != null) navigator.geolocation.clearWatch(id);
  document.getElementById("out").textContent = "stopped";
};
