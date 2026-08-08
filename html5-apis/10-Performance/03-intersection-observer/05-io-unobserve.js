const io = new IntersectionObserver((ents) => {
  document.getElementById("out").textContent = "seen intersecting=" + ents[0].isIntersecting;
});
io.observe(document.getElementById("t"));
document.getElementById("go").onclick = () => {
  io.unobserve(document.getElementById("t"));
  document.getElementById("out").textContent = "unobserved";
};
