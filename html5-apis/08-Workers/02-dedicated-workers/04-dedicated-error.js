document.getElementById("go").onclick = () => {
  const src = "throw new Error('boom');";
  const url = URL.createObjectURL(new Blob([src], { type: "text/javascript" }));
  const w = new Worker(url);
  w.onerror = (e) => {
    document.getElementById("out").textContent = "error: " + e.message;
    e.preventDefault();
    w.terminate();
    URL.revokeObjectURL(url);
  };
};
