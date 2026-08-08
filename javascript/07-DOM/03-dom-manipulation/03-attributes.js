const link = document.getElementById("link");
link.setAttribute("target", "_blank");
document.getElementById("out").textContent =
  link.getAttribute("href") + " target=" + link.getAttribute("target");
