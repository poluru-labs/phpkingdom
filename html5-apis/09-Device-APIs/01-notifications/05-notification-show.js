document.getElementById("go").onclick = async () => {
  if (Notification.permission !== "granted") {
    await Notification.requestPermission();
  }
  if (Notification.permission === "granted") {
    new Notification("phpkingdom", { body: "HTML5 APIs demo" });
    document.getElementById("out").textContent = "shown";
  } else {
    document.getElementById("out").textContent = "denied/default";
  }
};
