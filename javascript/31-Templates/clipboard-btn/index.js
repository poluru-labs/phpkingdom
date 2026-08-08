document.getElementById("copy").onclick = async () => {
  const text = "Hello from phpkingdom.com";
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      document.getElementById("out").textContent = "copied: " + text;
    } else {
      document.getElementById("out").textContent = "clipboard API unavailable";
    }
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
