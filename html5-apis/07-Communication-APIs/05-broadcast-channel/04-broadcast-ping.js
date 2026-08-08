const ch = new BroadcastChannel("pk-demo");
ch.onmessage = (e) => {
  document.getElementById("out").textContent = "received: " + JSON.stringify(e.data);
};
document.getElementById("go").onclick = () => {
  ch.postMessage({ hello: "phpkingdom", t: Date.now() });
  document.getElementById("out").textContent = "sent (open another tab to see receive)";
};
