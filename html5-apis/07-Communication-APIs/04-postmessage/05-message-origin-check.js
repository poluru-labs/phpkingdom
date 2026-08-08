document.getElementById("go").onclick = () => {
  document.getElementById("out").textContent = "expected origin=" + location.origin;
};
