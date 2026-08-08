document.getElementById("btn").onclick = async () => {
  if (!("Notification" in window)) {
    document.getElementById("out").textContent = "not supported";
    return;
  }
  const p = await Notification.requestPermission();
  document.getElementById("out").textContent = "permission=" + p;
};
