document.getElementById("go").onclick = async () => {
  if (!window.showSaveFilePicker) {
    document.getElementById("out").textContent = "unsupported";
    return;
  }
  try {
    const handle = await showSaveFilePicker({ suggestedName: "demo.txt" });
    const writable = await handle.createWritable();
    await writable.write("Hello from phpkingdom.com");
    await writable.close();
    document.getElementById("out").textContent = "saved";
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
