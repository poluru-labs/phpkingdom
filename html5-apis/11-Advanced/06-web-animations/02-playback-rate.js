const anim = document.getElementById("box").animate(
  [{ transform: "rotate(0)" }, { transform: "rotate(360deg)" }],
  { duration: 2000, iterations: Infinity }
);
document.getElementById("go").onclick = () => {
  anim.playbackRate = 2;
  document.getElementById("out").textContent = "playbackRate=" + anim.playbackRate;
};
