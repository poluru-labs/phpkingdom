document.getElementById("out").textContent = "before assign => " + String(x);
var x = 42;
document.getElementById("out").textContent += "\nafter assign => " + x;
