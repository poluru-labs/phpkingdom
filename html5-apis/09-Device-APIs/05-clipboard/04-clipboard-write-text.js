document.getElementById("go").onclick = async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById("t").value);
    document.getElementById("out").textContent = "copied";
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
