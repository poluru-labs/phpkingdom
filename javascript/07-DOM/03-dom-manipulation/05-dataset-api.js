const el = document.createElement("div");
el.dataset.userId = "42";
document.getElementById("out").textContent = el.getAttribute("data-user-id") + " / " + el.dataset.userId;
