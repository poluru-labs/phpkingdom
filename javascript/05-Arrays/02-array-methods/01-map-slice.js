const colors = ["red", "green", "blue"];
document.getElementById("out").textContent =
  colors.includes("green") + " / " + colors.indexOf("blue");
