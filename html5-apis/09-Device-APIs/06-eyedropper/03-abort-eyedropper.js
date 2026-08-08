document.getElementById("go").onclick = async () => {
  if (!window.EyeDropper) { document.getElementById("out").textContent = "unsupported"; return; }
  const c = new AbortController();
  setTimeout(() => c.abort(), 3000);
  try {
    const r = await new EyeDropper().open({ signal: c.signal });
    document.getElementById("out").textContent = r.sRGBHex;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
