document.getElementById("go").onclick = async () => {
  if (!("caches" in window)) {
    document.getElementById("out").textContent = "Cache Storage unavailable";
    return;
  }
  const cache = await caches.open("pk-offline-v1");
  document.getElementById("out").textContent = "opened " + cache;
};
