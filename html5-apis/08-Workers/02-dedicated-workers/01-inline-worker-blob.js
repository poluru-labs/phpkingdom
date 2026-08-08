document.getElementById("btn").onclick = () => {
  const src = `onmessage = (e) => {
    const n = e.data;
    let s = 0;
    for (let i = 1; i <= n; i++) s += i;
    postMessage(s);
  };`;
  const worker = new Worker(URL.createObjectURL(new Blob([src], { type: "text/javascript" })));
  worker.onmessage = (e) => {
    document.getElementById("out").textContent = "sum 1..500000 = " + e.data;
    worker.terminate();
  };
  worker.postMessage(500000);
};
