const ro = new ResizeObserver(() => {});
ro.observe(document.body);
document.getElementById("go").onclick = () => { ro.disconnect(); document.getElementById("out").textContent = "disconnected"; };
