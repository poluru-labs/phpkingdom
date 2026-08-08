document.getElementById("go").onclick = () => {
  const buf = new ArrayBuffer(8);
  const src = "onmessage=(e)=>{ postMessage(e.data.byteLength); };";
  const url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
  const w = new Worker(url);
  w.onmessage = (e) => {
    document.getElementById("out").textContent = "worker saw byteLength=" + e.data + "; main buf.byteLength=" + buf.byteLength;
    w.terminate(); URL.revokeObjectURL(url);
  };
  w.postMessage(buf, [buf]);
};
