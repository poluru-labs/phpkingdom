document.getElementById("go").onclick = async () => {
  if (!navigator.getBattery) {
    document.getElementById("out").textContent = "Battery API unavailable";
    return;
  }
  const b = await navigator.getBattery();
  document.getElementById("out").textContent =
    "level=" + b.level + " charging=" + b.charging;
};
