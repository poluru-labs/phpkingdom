document.getElementById("go").onclick = async () => {
  if (!window.showOpenFilePicker) {
    document.getElementById("out").textContent = "unsupported — use input[type=file] fallback";
    return;
  }
  try {
    const [handle] = await showOpenFilePicker({ types: [{ description: "Text", accept: { "text/plain": [".txt", ".md"] } }] });
    const file = await handle.getFile();
    document.getElementById("out").textContent = file.name + "\n" + (await file.text()).slice(0, 300);
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
