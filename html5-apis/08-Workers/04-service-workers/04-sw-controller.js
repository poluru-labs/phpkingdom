document.getElementById("go").onclick = async () => {
  if (!("serviceWorker" in navigator)) {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  const reg = await navigator.serviceWorker.getRegistration();
  document.getElementById("out").textContent =
    "controller=" + Boolean(navigator.serviceWorker.controller) +
    "\nregistration=" + Boolean(reg);
};
