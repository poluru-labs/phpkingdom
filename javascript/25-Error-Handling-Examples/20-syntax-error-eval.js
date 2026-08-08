const out = document.getElementById("out");
try {
  new Function("return {{{")();
} catch (e) {
  out.textContent = e.name + ": invalid syntax caught safely";
}
