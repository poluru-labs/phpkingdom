document.getElementById("go").onclick = async () => {
  if (!navigator.mediaDevices?.enumerateDevices) {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  const list = await navigator.mediaDevices.enumerateDevices();
  document.getElementById("out").textContent = list.map(d => d.kind + " " + (d.label || d.deviceId.slice(0,8))).join("\n");
};
