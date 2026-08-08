const boxes = document.getElementsByClassName("box");
const out = document.getElementById("out");
function show() { out.textContent = "live length = " + boxes.length; }
show();
document.getElementById("add").onclick = () => {
  const d = document.createElement("div");
  d.className = "box";
  d.textContent = String(boxes.length + 1);
  document.body.insertBefore(d, document.getElementById("add"));
  show();
};
