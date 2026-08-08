function greet(name = "Guest") {
  return "Hi, " + name;
}
document.getElementById("out").textContent =
  greet() + "\n" + greet("Ada");
