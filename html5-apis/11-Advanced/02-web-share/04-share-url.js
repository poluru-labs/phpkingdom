document.getElementById("go").onclick = async () => {
  if (!navigator.share) {
    document.getElementById("out").textContent = "Web Share unsupported";
    return;
  }
  try {
    await navigator.share({ title: "phpkingdom", url: location.href });
    document.getElementById("out").textContent = "shared";
  } catch (e) {
    document.getElementById("out").textContent = e.name + ": " + e.message;
  }
};
