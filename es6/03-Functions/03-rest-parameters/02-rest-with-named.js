function tag(label, ...items) {
  return label + ": " + items.join(", ");
}
document.getElementById("out").textContent = tag("fruits", "a", "b");
