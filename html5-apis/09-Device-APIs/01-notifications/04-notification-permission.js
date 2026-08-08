document.getElementById("out").textContent = "permission=" + Notification.permission;
document.getElementById("go").onclick = async () => {
  const p = await Notification.requestPermission();
  document.getElementById("out").textContent = "permission=" + p;
};
