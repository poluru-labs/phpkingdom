document.getElementById("go").onclick = () => {
  const ws = new WebSocket("wss://echo.websocket.events");
  document.getElementById("out").textContent = "readyState=" + ws.readyState;
  ws.onopen = () => {
    document.getElementById("out").textContent = "open readyState=" + ws.readyState;
    ws.send("hello phpkingdom");
  };
  ws.onmessage = (e) => {
    document.getElementById("out").textContent += "\nmsg=" + e.data;
    ws.close();
  };
  ws.onerror = () => { document.getElementById("out").textContent += "\nerror"; };
};
