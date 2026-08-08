const text = "learn javascript on phpkingdom.com";
document.getElementById("out").textContent =
  "index=" + text.indexOf("javascript") + ", includes=" + text.includes("kingdom");
