function regular() { return arguments.length; }
const arrow = () => {
  try { return arguments.length; }
  catch (e) { return e.message; }
};
document.getElementById("out").textContent =
  "regular(1,2) => " + regular(1, 2) + "\n" +
  "arrow => " + arrow(1, 2);
