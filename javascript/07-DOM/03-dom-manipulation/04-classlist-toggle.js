const el = document.createElement("div");
el.classList.add("on");
el.classList.toggle("on");
el.classList.toggle("on", true);
document.getElementById("out").textContent = el.className;
