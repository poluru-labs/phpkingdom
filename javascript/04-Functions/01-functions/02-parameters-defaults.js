function welcome(user = "Guest") { return "Welcome " + user; }
document.getElementById("out").textContent = welcome() + " / " + welcome("Sam");
