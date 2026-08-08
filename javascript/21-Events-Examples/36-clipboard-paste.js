document.getElementById("field").addEventListener("paste", (e) => {
  const text = (e.clipboardData || window.clipboardData).getData("text");
  document.getElementById("out").textContent = "paste length=" + text.length;
});
