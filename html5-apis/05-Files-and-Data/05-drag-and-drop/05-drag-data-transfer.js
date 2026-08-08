document.getElementById("src").ondragstart = (e) => {
  e.dataTransfer.setData("text/plain", "phpkingdom");
};
const dst = document.getElementById("dst");
dst.ondragover = (e) => e.preventDefault();
dst.ondrop = (e) => {
  e.preventDefault();
  document.getElementById("out").textContent = "got: " + e.dataTransfer.getData("text/plain");
};
