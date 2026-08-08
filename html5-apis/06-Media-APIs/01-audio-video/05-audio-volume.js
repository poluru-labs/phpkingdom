document.getElementById("go").onclick = () => {
  const a = document.getElementById("a");
  a.volume = 0.3;
  document.getElementById("out").textContent = "volume=" + a.volume;
};
