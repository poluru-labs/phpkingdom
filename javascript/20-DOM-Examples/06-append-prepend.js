const box = document.getElementById("box");
let i = 0;
document.getElementById("a").onclick = () => {
  i += 1;
  const s = document.createElement("span");
  s.textContent = " [end" + i + "]";
  box.append(s);
};
document.getElementById("p").onclick = () => {
  i += 1;
  const s = document.createElement("span");
  s.textContent = "[start" + i + "] ";
  box.prepend(s);
};
