document.getElementById("go").onclick = async () => {
  const rs = new ReadableStream({
    start(c) { c.enqueue("x"); c.close(); },
  });
  const [a, b] = rs.tee();
  const ra = await a.getReader().read();
  const rb = await b.getReader().read();
  document.getElementById("out").textContent = "a=" + ra.value + " b=" + rb.value;
};
