document.getElementById("go").onclick = async () => {
  if (!window.EyeDropper) {
    document.getElementById("out").textContent = "unsupported in this browser";
    return;
  }
  try {
    const result = await new EyeDropper().open();
    document.getElementById("swatch").style.background = result.sRGBHex;
    document.getElementById("out").textContent = result.sRGBHex;
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
