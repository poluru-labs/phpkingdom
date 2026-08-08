let id = 0;
document.getElementById("go").onclick = () => {
  const loop = () => {
    document.getElementById("out").textContent = "t=" + performance.now().toFixed(0);
    id = requestAnimationFrame(loop);
  };
  id = requestAnimationFrame(loop);
};
document.getElementById("stop").onclick = () => {
  cancelAnimationFrame(id);
  document.getElementById("out").textContent += "\ncanceled";
};
