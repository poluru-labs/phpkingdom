document.getElementById("out").textContent =
`const ws = new WebSocket("wss://example.com/socket");
ws.onopen = () => ws.send(JSON.stringify({ type: "hello", site: "phpkingdom.com" }));
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log(msg);
};
ws.onclose = () => console.log("closed");`;
