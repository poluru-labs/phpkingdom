document.getElementById("go").onclick = async () => {
  if (!window.showDirectoryPicker) {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  try {
    const dir = await showDirectoryPicker();
    const names = [];
    for await (const [name] of dir.entries()) { names.push(name); if (names.length >= 8) break; }
    document.getElementById("out").textContent = names.join("\n") || "(empty)";
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
