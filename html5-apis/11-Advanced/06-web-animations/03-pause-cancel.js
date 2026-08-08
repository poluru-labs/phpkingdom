const anim = document.getElementById("box").animate(
  [{ opacity: 1 }, { opacity: 0.2 }, { opacity: 1 }],
  { duration: 1000, iterations: Infinity }
);
document.getElementById("pause").onclick = () => { anim.pause(); document.getElementById("out").textContent = anim.playState; };
document.getElementById("cancel").onclick = () => { anim.cancel(); document.getElementById("out").textContent = anim.playState; };
