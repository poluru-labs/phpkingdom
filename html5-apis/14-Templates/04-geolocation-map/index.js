document.getElementById("go").onclick = () => {
  if (!navigator.geolocation) { document.getElementById("out").textContent = "unsupported"; return; }
  navigator.geolocation.getCurrentPosition(
    (p) => { document.getElementById("out").textContent = p.coords.latitude + ", " + p.coords.longitude; },
    (e) => { document.getElementById("out").textContent = e.message; }
  );
};
