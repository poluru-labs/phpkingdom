const PI = 3.14159;
const user = { name: "Ada" };
user.name = "Grace"; // object contents can change
document.getElementById("out").textContent = PI + " / " + user.name;
