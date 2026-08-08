window.addEventListener("deviceorientation", (e) => {
  document.getElementById("out").textContent =
    "alpha=" + e.alpha?.toFixed?.(1) +
    "\nbeta=" + e.beta?.toFixed?.(1) +
    "\ngamma=" + e.gamma?.toFixed?.(1);
}, true);
