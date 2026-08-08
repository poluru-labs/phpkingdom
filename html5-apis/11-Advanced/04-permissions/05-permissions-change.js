document.getElementById("go").onclick = async () => {
  try {
    const status = await navigator.permissions.query({ name: "geolocation" });
    const paint = () => { document.getElementById("out").textContent = "geolocation=" + status.state; };
    paint();
    status.onchange = paint;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
