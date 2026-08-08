document.getElementById("go").onclick = async () => {
  try {
    const res = await fetch("https://httpbin.org/bytes/64");
    const reader = res.body.getReader();
    let total = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.byteLength;
    }
    document.getElementById("out").textContent = "bytes read=" + total;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
