document.getElementById("go").onclick = async () => {
  if (!navigator.permissions?.query) {
    document.getElementById("out").textContent = "Permissions API missing";
    return;
  }
  try {
    const status = await navigator.permissions.query({ name: "notifications" });
    document.getElementById("out").textContent = "notifications=" + status.state;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
