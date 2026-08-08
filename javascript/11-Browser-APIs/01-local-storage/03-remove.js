localStorage.setItem("temp", "1");
localStorage.removeItem("temp");
document.getElementById("out").textContent =
  "temp=" + localStorage.getItem("temp");
