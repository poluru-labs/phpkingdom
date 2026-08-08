document.getElementById("go").onclick = async () => {
  if (!navigator.getBattery) return;
  const b = await navigator.getBattery();
  const paint = () => {
    document.getElementById("out").textContent = "level=" + b.level;
  };
  paint();
  b.addEventListener("levelchange", paint);
};
