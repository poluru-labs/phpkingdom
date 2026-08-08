document.getElementById("btn").onclick = async () => {
  try {
    await navigator.clipboard.writeText("Copied from phpkingdom.com");
    document.getElementById("out").textContent = "copied";
  } catch (e) {
    document.getElementById("out").textContent = e.message;
  }
};
