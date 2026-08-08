new ResizeObserver((entries) => {
  const e = entries[0];
  const bb = e.borderBoxSize && e.borderBoxSize[0];
  document.getElementById("out").textContent = bb
    ? "border inline=" + bb.inlineSize + " block=" + bb.blockSize
    : "content " + Math.round(e.contentRect.width) + "×" + Math.round(e.contentRect.height);
}).observe(document.getElementById("box"));
