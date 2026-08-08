const mq = window.matchMedia("(prefers-color-scheme: dark)");
function paint() {
  document.getElementById("out").textContent = "dark=" + mq.matches;
}
paint();
mq.addEventListener("change", paint);
