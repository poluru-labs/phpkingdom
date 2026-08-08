document.getElementById("go").onclick = async () => {
  if (!navigator.permissions?.query) { document.getElementById("out").textContent = "missing"; return; }
  const names = ["notifications", "geolocation", "clipboard-write"];
  const lines = [];
  for (const name of names) {
    try { lines.push(name + "=" + (await navigator.permissions.query({ name })).state); }
    catch (e) { lines.push(name + "=err"); }
  }
  document.getElementById("out").textContent = lines.join("\n");
};
