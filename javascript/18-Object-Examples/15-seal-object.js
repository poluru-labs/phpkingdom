const user = Object.seal({ name: "Ada" });
user.name = "Grace";
user.age = 30;
document.getElementById("out").textContent = JSON.stringify(user);
