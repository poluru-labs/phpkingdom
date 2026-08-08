if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel("phpkingdom");
  bc.onmessage = (e) => {
    document.getElementById("out").textContent = "received: " + e.data;
  };
  document.getElementById("btn").onclick = () => bc.postMessage("ping " + Date.now());
} else {
  document.getElementById("out").textContent = "not supported";
}
