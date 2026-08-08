let controller = null;
function delay(ms, signal) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => resolve("done"), ms);
    signal.addEventListener("abort", () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
document.getElementById("start").onclick = async () => {
  controller = new AbortController();
  document.getElementById("out").textContent = "working…";
  try {
    const v = await delay(2000, controller.signal);
    document.getElementById("out").textContent = v;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
document.getElementById("cancel").onclick = () => {
  controller?.abort();
};
