document.getElementById("out").textContent =
`const es = new EventSource("/api/stream");
es.onmessage = (event) => {
  console.log("message", event.data);
};
es.addEventListener("user.created", (event) => {
  console.log(JSON.parse(event.data));
});
es.onerror = () => es.close();`;
