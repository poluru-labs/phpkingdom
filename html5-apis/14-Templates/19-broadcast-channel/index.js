const ch = new BroadcastChannel("pk-tpl");
ch.onmessage = (e) => { document.getElementById("out").textContent = "recv " + JSON.stringify(e.data); };
document.getElementById("go").onclick = () => ch.postMessage({ t: Date.now(), from: "tpl" });
