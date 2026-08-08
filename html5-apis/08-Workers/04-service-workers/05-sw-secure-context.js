document.getElementById("out").textContent =
  "isSecureContext=" + window.isSecureContext + "\nserviceWorker=" + ("serviceWorker" in navigator);
