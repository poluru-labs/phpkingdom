function outer(msg) {
  return function inner(name) {
    return msg + ", " + name;
  };
}
const welcome = outer("Welcome");
document.getElementById("out").textContent = welcome("Guest");
