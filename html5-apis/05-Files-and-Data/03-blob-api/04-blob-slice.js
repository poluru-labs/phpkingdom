document.getElementById("go").onclick = () => {
  const b = new Blob(["Hello phpkingdom.com"], { type: "text/plain" });
  const part = b.slice(0, 5);
  document.getElementById("out").textContent = "size=" + b.size + " sliceSize=" + part.size;
};
