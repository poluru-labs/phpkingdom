document.getElementById("go").onclick = async () => {
  const chunks = [];
  const ws = new WritableStream({
    write(chunk) { chunks.push(chunk); },
    close() { document.getElementById("out").textContent = chunks.join("|"); },
  });
  const w = ws.getWriter();
  await w.write("a");
  await w.write("b");
  await w.close();
};
