const btn = document.getElementById("btn");
btn.dataset.role = "editor";
document.getElementById("out").textContent =
  "userId=" + btn.dataset.userId + " role=" + btn.dataset.role;
