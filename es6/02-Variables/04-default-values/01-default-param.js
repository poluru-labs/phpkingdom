function greet(name = "guest") { return "Hi " + name; }
document.getElementById("out").textContent = greet() + " / " + greet("Ada");
