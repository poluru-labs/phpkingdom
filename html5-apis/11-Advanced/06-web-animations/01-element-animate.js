document.getElementById("go").onclick = () => {
  const anim = document.getElementById("box").animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(120px)" }],
    { duration: 600, easing: "ease-out", fill: "forwards" }
  );
  anim.finished.then(() => { document.getElementById("out").textContent = "done playState=" + anim.playState; });
};
