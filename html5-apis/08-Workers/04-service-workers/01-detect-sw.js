document.getElementById("out").textContent =
  "serviceWorker: " + ("serviceWorker" in navigator) +
  "\nsecure: " + window.isSecureContext;
