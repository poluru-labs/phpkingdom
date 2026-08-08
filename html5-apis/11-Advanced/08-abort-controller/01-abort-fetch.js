let controller;
document.getElementById("start").onclick = async () => {
  controller = new AbortController();
  document.getElementById("out").textContent = "fetching…";
  try {
    const res = await fetch("https://httpbin.org/delay/3", { signal: controller.signal });
    document.getElementById("out").textContent = "status=" + res.status;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
document.getElementById("abort").onclick = () => controller?.abort();
