document.getElementById("go").onclick = async () => {
  const c = new AbortController();
  const t = setTimeout(() => c.abort("timeout"), 1000);
  try {
    await fetch("https://httpbin.org/delay/3", { signal: c.signal });
    document.getElementById("out").textContent = "unexpected success";
  } catch (e) {
    document.getElementById("out").textContent = e.name + " " + (c.signal.reason || e.message);
  } finally {
    clearTimeout(t);
  }
};
