document.getElementById("go").onclick = async () => {
  const p = await Notification.requestPermission();
  document.getElementById("out").textContent = p;
  if (p === "granted") new Notification("phpkingdom", { body: "Template ready" });
};
