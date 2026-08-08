document.getElementById("go").onclick = () => {
  const v = document.getElementById("v");
  v.currentTime = 1;
  document.getElementById("out").textContent = "currentTime=" + v.currentTime;
};
