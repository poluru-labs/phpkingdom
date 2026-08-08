document.getElementById("go").onclick = () => {
  const src = "onmessage = (e) => { postMessage(e.data * 2); };";
  const url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
  const w = new Worker(url);
  w.onmessage = (e) => {
    document.getElementById("out").textContent = "result=" + e.data;
    w.terminate();
    URL.revokeObjectURL(url);
  };
  w.postMessage(21);
};
