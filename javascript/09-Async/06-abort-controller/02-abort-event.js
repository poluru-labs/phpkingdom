const c = new AbortController();
c.signal.addEventListener("abort", () => {
  document.getElementById("out").textContent = "aborted reason=" + c.signal.reason;
});
c.abort("stop");
