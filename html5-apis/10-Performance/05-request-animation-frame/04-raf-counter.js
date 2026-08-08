document.getElementById("go").onclick = () => {
  const start = performance.now();
  let frames = 0;
  function tick(now) {
    frames++;
    document.getElementById("out").textContent = "frames=" + frames;
    if (now - start < 1000) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
};
