function highlight(strings, ...vals) {
  return strings.reduce((out, s, i) => out + s + (vals[i] != null ? "[" + vals[i] + "]" : ""), "");
}
const name = "Ada";
document.getElementById("out").textContent = highlight`Hello ${name}!`;
