document.getElementById("btn").onclick = async () => {
  try {
    const t = await navigator.clipboard.readText();
    document.getElementById("out").textContent = "clipboard: " + t;
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
