window.addEventListener("message", (e) => {
  if (e.data?.type === "pk-ping") {
    document.getElementById("out").textContent = "got " + JSON.stringify(e.data);
  }
});
document.getElementById("go").onclick = () => {
  window.postMessage({ type: "pk-ping", t: Date.now() }, location.origin);
};
