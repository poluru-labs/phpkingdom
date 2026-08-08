localStorage.setItem("a", "1");
document.getElementById("out").textContent =
  "length before clear = " + localStorage.length;
localStorage.removeItem("a");
