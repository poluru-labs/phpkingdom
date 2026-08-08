document.getElementById("go").onclick = async () => {
  const rows = [
    ["serviceWorker", "serviceWorker" in navigator],
    ["caches", "caches" in window],
    ["onLine", navigator.onLine],
    ["isSecureContext", window.isSecureContext],
  ];
  document.getElementById("out").textContent = rows.map(([k,v]) => k + ": " + v).join("\n");
};
