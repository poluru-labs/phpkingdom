document.getElementById("go").onclick = () => {
  const ws = new WebSocket("wss://echo.websocket.events");
  ws.onopen = () => ws.send(document.getElementById("msg").value || "ping");
  ws.onmessage = (e) => { document.getElementById("out").textContent = "echo: " + e.data; ws.close(); };
  ws.onerror = () => { document.getElementById("out").textContent = "error"; };
};
