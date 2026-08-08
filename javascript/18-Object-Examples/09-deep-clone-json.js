const a = { user: { name: "Ada" } };
const b = JSON.parse(JSON.stringify(a));
b.user.name = "Grace";
document.getElementById("out").textContent = a.user.name + " / " + b.user.name;
