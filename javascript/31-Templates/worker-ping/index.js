document.getElementById("ping").onclick = () => {
  const src = "onmessage = (e) => { postMessage('pong:' + e.data); };";
  const worker = new Worker(URL.createObjectURL(new Blob([src], { type: "text/javascript" })));
  worker.onmessage = (e) => {
    document.getElementById("out").textContent = e.data;
    worker.terminate();
  };
  worker.postMessage("ping");
};
