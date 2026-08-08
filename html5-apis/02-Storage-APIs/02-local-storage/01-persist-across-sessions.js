document.getElementById("save").onclick = () => {
  localStorage.setItem("lastVisit", new Date().toISOString());
  document.getElementById("out").textContent = "saved";
};
document.getElementById("read").onclick = () => {
  document.getElementById("out").textContent =
    "lastVisit = " + localStorage.getItem("lastVisit");
};
