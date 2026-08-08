document.getElementById("btn").onclick = () => {
  if (Notification.permission !== "granted") {
    document.getElementById("out").textContent = "grant permission first";
    return;
  }
  new Notification("phpkingdom.com", { body: "Hello from Notifications API" });
  document.getElementById("out").textContent = "shown";
};
