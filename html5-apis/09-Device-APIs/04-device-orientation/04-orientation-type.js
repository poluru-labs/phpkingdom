document.getElementById("go").onclick = () => {
  const o = screen.orientation;
  document.getElementById("out").textContent = o
    ? o.type + " angle=" + o.angle
    : "orientation API missing";
};
