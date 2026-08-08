document.getElementById("out").textContent =
  "Notification: " + (typeof Notification !== "undefined") +
  "\npermission: " + (typeof Notification !== "undefined" ? Notification.permission : "n/a");
