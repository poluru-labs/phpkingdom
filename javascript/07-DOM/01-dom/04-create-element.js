const p = document.createElement("p");
p.textContent = "Created via DOM API";
document.body.appendChild(p);
document.getElementById("out").textContent = "appended <p>";
