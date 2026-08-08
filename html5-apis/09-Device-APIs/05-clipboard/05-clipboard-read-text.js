document.getElementById("go").onclick = async () => {
  try {
    const t = await navigator.clipboard.readText();
    document.getElementById("out").textContent = t || "(empty)";
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
