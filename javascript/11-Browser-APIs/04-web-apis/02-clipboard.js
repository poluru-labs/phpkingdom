document.getElementById("btn").onclick = async function () {
  try {
    await navigator.clipboard.writeText("phpkingdom.com");
    document.getElementById("out").textContent = "Copied!";
  } catch (e) {
    document.getElementById("out").textContent = "Clipboard blocked: " + e.message;
  }
};
