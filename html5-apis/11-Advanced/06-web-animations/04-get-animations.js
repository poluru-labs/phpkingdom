document.getElementById("box").animate([{ transform: "scale(1)" }, { transform: "scale(1.2)" }], { duration: 800, iterations: Infinity, direction: "alternate" });
document.getElementById("go").onclick = () => {
  const list = document.getElementById("box").getAnimations();
  document.getElementById("out").textContent = "count=" + list.length + " state=" + list[0]?.playState;
};
