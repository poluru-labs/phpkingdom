document.getElementById("go").onclick = async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue("Hello ");
      controller.enqueue("Streams");
      controller.close();
    },
  });
  const reader = stream.getReader();
  let out = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    out += value;
  }
  document.getElementById("out").textContent = out;
};
