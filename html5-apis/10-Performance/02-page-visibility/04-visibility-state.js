const paint = () => {
  document.getElementById("out").textContent =
    "visibilityState=" + document.visibilityState + " hidden=" + document.hidden;
};
document.addEventListener("visibilitychange", paint);
paint();
