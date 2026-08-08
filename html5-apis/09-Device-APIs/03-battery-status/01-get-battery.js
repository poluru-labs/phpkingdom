document.getElementById("btn").onclick = async () => {
  if (!navigator.getBattery) {
    document.getElementById("out").textContent = "getBattery not available";
    return;
  }
  const b = await navigator.getBattery();
  document.getElementById("out").textContent =
    "level=" + b.level + " charging=" + b.charging;
};
