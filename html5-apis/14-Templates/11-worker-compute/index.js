document.getElementById("go").onclick = () => {
  const n = Number(document.getElementById("n").value);
  const url = URL.createObjectURL(new Blob(["onmessage=e=>postMessage(e.data*2)"], { type: "text/javascript" }));
  const w = new Worker(url);
  w.onmessage = (e) => { document.getElementById("out").textContent = "result=" + e.data; w.terminate(); URL.revokeObjectURL(url); };
  w.postMessage(n);
};
