const data = { id: 1, secret: "x", name: "Ada" };
document.getElementById("out").textContent = JSON.stringify(data, ["id", "name"]);
