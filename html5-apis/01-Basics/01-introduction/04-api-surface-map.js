const groups = {
  storage: ["localStorage", "indexedDB"],
  graphics: ["HTMLCanvasElement", "OffscreenCanvas"],
  network: ["fetch", "WebSocket", "EventSource"],
};
document.getElementById("out").textContent = JSON.stringify(groups, null, 2);
