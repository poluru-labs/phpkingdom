const paint = () => {
  const o = screen.orientation;
  document.getElementById("out").textContent = o ? o.type + " " + o.angle : window.orientation;
};
screen.orientation?.addEventListener("change", paint);
window.addEventListener("orientationchange", paint);
paint();
