document.getElementById("go").onclick = () => {
  const run = () => document.getElementById("panel").classList.toggle("on");
  if (!document.startViewTransition) { run(); document.getElementById("out").textContent = "no VT; toggled"; return; }
  document.startViewTransition(run);
  document.getElementById("out").textContent = "view transition started";
};
