function greet(name = "friend", punct = "!") {
  return "Hello, " + name + punct;
}
document.getElementById("out").textContent = greet() + "\n" + greet("Ada", ".");
