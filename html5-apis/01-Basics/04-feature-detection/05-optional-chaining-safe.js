document.getElementById("go").onclick = () => {
  const bat = navigator.getBattery ? "getBattery available" : "no Battery API";
  const share = navigator.share ? "share available" : "no Web Share";
  document.getElementById("out").textContent = bat + "\n" + share;
};
