const box = document.createElement("div");
box.id = "probe";
document.body.appendChild(box);
document.getElementById("out").textContent =
  "byId=" + !!document.getElementById("probe") +
  " qs=" + !!document.querySelector("#probe");
