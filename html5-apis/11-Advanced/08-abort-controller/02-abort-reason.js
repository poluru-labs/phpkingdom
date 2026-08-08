document.getElementById("go").onclick = () => {
  const c = new AbortController();
  c.signal.addEventListener("abort", () => {
    document.getElementById("out").textContent = "reason=" + (c.signal.reason || "n/a");
  });
  c.abort("user canceled");
};
