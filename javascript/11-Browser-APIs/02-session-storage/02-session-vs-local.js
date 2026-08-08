sessionStorage.setItem("kind", "session");
localStorage.setItem("kind", "local");
document.getElementById("out").textContent =
  "session=" + sessionStorage.getItem("kind") + ", local=" + localStorage.getItem("kind");
