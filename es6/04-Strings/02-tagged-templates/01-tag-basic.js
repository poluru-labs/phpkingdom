function highlight(strings, ...values) {
  return strings.map((s, i) => s + (values[i] != null ? `[${values[i]}]` : "")).join("");
}
const name = "Ada";
document.getElementById("out").textContent = highlight`Hello ${name}!`;
