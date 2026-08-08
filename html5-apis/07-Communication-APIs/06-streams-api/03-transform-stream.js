document.getElementById("go").onclick = async () => {
  const ts = new TransformStream({
    transform(chunk, controller) { controller.enqueue(String(chunk).toUpperCase()); },
  });
  const writer = ts.writable.getWriter();
  const reader = ts.readable.getReader();
  writer.write("phpkingdom");
  writer.close();
  const { value } = await reader.read();
  document.getElementById("out").textContent = value;
};
