const key = "pk-demo-user";
localStorage.setItem(key, JSON.stringify({ name: "Ada" }));
const user = JSON.parse(localStorage.getItem(key));
document.getElementById("out").textContent = user.name;
localStorage.removeItem(key);
